import { Request, Response, NextFunction } from "express";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      return res.status(200).json({ email, password });
    } catch (error) {
      return next(error);
    }
  },
};
