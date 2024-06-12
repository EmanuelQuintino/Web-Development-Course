import { Request, Response, NextFunction } from "express";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const users = [
  { id: "1", name: "user1", email: "user1@email.com" },
  { id: "2", name: "user2", email: "user2@email.com" },
  { id: "3", name: "user3", email: "user3@email.com" },
];

export const reportControllers = {
  async reportUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const tableBody = users.map((user) => [user.id, user.name, user.email]);

      const documentDefinition = {
        content: [
          { text: "Lista de Usuários", style: "header" },
          {
            style: "tableExample",
            table: {
              headerRows: 1,
              body: [["ID", "Nome", "Email"], ...tableBody],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10] as [number, number, number, number],
          },
          tableExample: {
            margin: [0, 5, 0, 15] as [number, number, number, number],
          },
        },
      };

      const pdfDoc = pdfMake.createPdf(documentDefinition);

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        pdfDoc.getBuffer((buffer) => {
          resolve(buffer);
        });
      });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "inline; filename=users.pdf");

      res.send(buffer);
    } catch (error) {
      return next(error);
    }
  },
};
