import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, age } = req.body;

      if (!id || !name || !age) {
        throw res.status(400).json({ message: "missing data!" });
      }

      // console.log(a); // error
      console.log("user created: ", { id, name, age });

      return res.status(201).json({ message: `user ${id} created!` });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      if (!id) {
        throw res.status(404).json({ message: "user(s) not found!" });
      }

      return res.status(200).json({ user: id });
    } catch (error) {
      return next(error);
    }
  },
};
