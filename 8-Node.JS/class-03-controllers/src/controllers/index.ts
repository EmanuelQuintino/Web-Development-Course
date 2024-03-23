import { Request, Response, NextFunction } from "express";

export const userController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        // console.log(a);
        console.log("created", { id, name, age });
        return res.status(201).json({ message: `user ${id} created!` });
      }

      throw res.status(400).json({ message: "user not created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { limit, offset } = req.query;

      if (id) {
        return res.status(200).json({ user: id });
      }

      if (limit && offset) {
        return res.status(200).json({ page: { limit, offset } });
      }

      throw res.status(404).json({ message: "user(s) not found!" });
    } catch (error) {
      return next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      if (id && name && age) {
        console.log("updated", { id, name, age });
        return res.status(200).json({ message: `user ${id} updated!` });
      }

      throw res.status(400).json({ message: "user not updated!" });
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      res.status(200).json({ message: `user ${id} deleted!` });
    } catch (error) {
      return next(error);
    }
  },
};
