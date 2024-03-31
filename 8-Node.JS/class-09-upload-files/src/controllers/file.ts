import { Request, Response, NextFunction } from "express";

export const uploadControllers = {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.file);
      res.status(200).json({ file: { name: req.file?.filename, url: "123" } });
    } catch (error) {
      return next(error);
    }
  },
};
