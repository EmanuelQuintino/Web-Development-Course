import { Request, Response } from "express";

export const userController = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      console.log("created", { id, name, age });
      res.status(201).send({ status: `user ${id} created!` });
      return;
    }

    res.status(400).send({ status: "user not created!" });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    const { limit, offset } = req.query;

    if (id) {
      res.status(200).send({ user: id });
      return;
    }

    if (limit && offset) {
      res.status(200).send({ page: { limit, offset } });
      return;
    }

    res.status(404).send({ status: "user(s) not found!" });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("updated", { id, name, age });
      res.status(200).send({ status: `user ${id} updated!` });
      return;
    }

    res.status(400).send({ status: "user not updated!" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).send({ status: `user ${id} deleted!` });
  },
};
