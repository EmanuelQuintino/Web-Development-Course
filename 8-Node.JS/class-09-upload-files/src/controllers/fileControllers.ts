import { Request, Response, NextFunction } from "express";
import { UPLOADS_FOLDER } from "../configs/uploadConfigs";
import path from "path";
import fs from "fs";

export const fileControllers = {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.file) {
        const { originalname, size, filename } = req.file;

        const file = {
          name: originalname,
          key: filename,
          size: Number(size / 1024).toFixed(1) + "KB",
          url: `${process.env.BASE_API}/file/${filename}`,
          created_at: new Date(),
        };

        return res.status(200).json(file);
      }
    } catch (error) {
      return next(error);
    }
  },

  async dalete(req: Request, res: Response, next: NextFunction) {
    try {
      const { file } = req.params;
      const filePath = path.resolve(UPLOADS_FOLDER, file);

      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);

      return res.status(200).json({ message: "file deleted!" });
    } catch (error) {
      return next(error);
    }
  },
};
