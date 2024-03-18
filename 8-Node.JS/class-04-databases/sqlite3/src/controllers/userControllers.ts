import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { hash } from "bcrypt";
import { randomUUID } from "node:crypto";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const db = await sqliteConnection();

      const userExists = await db.get("SELECT * FROM users WHERE email = (?)", [email]);
      if (userExists) throw res.status(400).send({ message: "user already exists!" });

      if (name && email && password) {
        const userUUID = randomUUID();
        const passwordHash = await hash(password, 10);
        const user = await db.run(
          "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);",
          [userUUID, name, email, passwordHash]
        );
        return res.status(201).send({ message: "user created!" });
      } else {
        return res.status(401).send({ message: "missing user data" });
      }
    } catch (error) {
      next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE id = (?)", [id]);
      if (user) {
        return res.status(200).send(user);
      } else {
        throw res.status(402).send({ message: "user note found!" });
      }
    } catch (error) {
      next(error);
    }
  },

  update() {
    console.log("update");
  },

  delete() {
    console.log("delete");
  },
};
