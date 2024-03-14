import { Request, Response } from "express";

export const userController = {
  create(req: Request, res: Response) {
    const { id, name } = req.body;
    res.json({ id, name });
  },

  read(_req: Request, res: Response) {
    res.send({ situation: "Listar usuários" });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ situation: `User ${id} atualizado` });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ situation: `User ${id} deletado` });
  },
};
