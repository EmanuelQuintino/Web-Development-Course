import { Request, Response, NextFunction } from "express";

export const userController = {
  async create(req: Request, res: Response) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        console.log("created", { id, name, age });
        return res.status(201).send({ message: `user ${id} created!` });
      }

      throw res.status(400).send({ message: "user not created!" });
    } catch (error) {
      console.error(error);
    }
  },

  async read(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { limit, offset } = req.query;

      if (id) {
        return res.status(200).send({ user: id });
      }

      if (limit && offset) {
        return res.status(200).send({ page: { limit, offset } });
      }

      throw res.status(404).send({ message: "user(s) not found!" });
    } catch (error) {
      console.error(error);
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      if (id && name && age) {
        console.log("updated", { id, name, age });
        return res.status(200).send({ message: `user ${id} updated!` });
      }

      throw res.status(400).send({ message: "user not updated!" });
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      res.status(200).send({ message: `user ${id} deleted!` });
    } catch (error) {
      console.error(error);
    }
  },
};
