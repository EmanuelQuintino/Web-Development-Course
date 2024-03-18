import { Request, Response } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { hash } from "bcrypt";

export const userControllers = {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const db = await sqliteConnection();

      const userExists = await db.get("SELECT * FROM users WHERE email = (?)", [email]);
      if (userExists) return res.status(400).send({ message: "user already exists!" });

      if (name && email && password) {
        const passwordHash = await hash(password, 10);
        const user = await db.run(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?);",
          [name, email, passwordHash]
        );
        return res.status(201).send({ message: "user created!" });
      } else {
        return res.status(401).send({ message: "missing user data" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "server error" });
    }
  },

  async read(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE id = (?)", [id]);
      if (user) {
        return res.status(200).send(user);
      } else {
        return res.status(404).send({ message: "user note found!" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "server error" });
    }
  },

  update() {
    console.log("update");
  },

  delete() {
    console.log("delete");
  },
};
