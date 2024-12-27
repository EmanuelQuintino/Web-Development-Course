import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, age } = req.body;
      // console.log(a); // error

      if (!name || !age) {
        throw new AppError("data is required!", 400);
      }

      const user = {
        id: new Date().getTime(),
        name,
        age,
      };

      return res.status(201).json({
        message: `user  created!`,
        data: user,
      });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = false; // query to databases

      if (!user) {
        throw new AppError("user not found!", 404);
      }

      return res.status(200).json({ user: id });
    } catch (error) {
      return next(error);
    }
  },
};
