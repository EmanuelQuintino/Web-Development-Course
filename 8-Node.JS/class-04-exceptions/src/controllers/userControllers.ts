import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, age } = req.body;
      // console.log(a); // error

      if (!id || !name || !age) {
        throw new AppError("data is required!", 400);
      }

      console.log("user created: ", { id, name, age });

      return res.status(201).json({ message: `user ${id} created!` });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = false;

      if (!user) {
        throw new AppError("user not found!", 404);
      }

      return res.status(200).json({ user: id });
    } catch (error) {
      return next(error);
    }
  },
};
