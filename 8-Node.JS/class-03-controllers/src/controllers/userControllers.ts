import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { name, age } = req.body;

    console.log("create user: ", { name, age });

    return res.status(201).json({ message: "user created!" });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;

    console.log(`search user ${id}...`);

    return res.status(200).json({ user: `${id}` });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    console.log("update user: ", { id, name, age });

    return res.status(200).json({ message: `user ${id} updated!` });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;

    console.log(`delete user ${id}...`);

    return res.status(200).json({ message: `user ${id} deleted!` });
  },
};
