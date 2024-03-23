import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      return res.status(201).json({ email, password });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      return res.status(200).json({ email, password });
    } catch (error) {
      return next(error);
    }
  },
};
