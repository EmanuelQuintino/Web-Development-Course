import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { hash, compare } from "bcrypt";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const db = await sqliteConnection();

      if (name && email && password) {
        const userExists = await db.get("SELECT * FROM users WHERE email = (?)", [email]);
        if (userExists) throw res.status(400).send({ message: "user already exists!" });

        const userUUID = randomUUID() || uuidv4();
        const passwordHash = await hash(password, 10);

        await db.run(
          "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);",
          [userUUID, name, email, passwordHash]
        );

        return res.status(201).send({ message: "user created!" });
      } else {
        throw res.status(400).send({ message: "missing user data" });
      }
    } catch (error) {
      next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteConnection();

      if (!password) {
        throw res.status(400).send({ message: "please confirm your password" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = (?)", [id]);
      if (!user) throw res.status(404).send({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).send({ message: "password not checked!" });
      }

      return res.status(200).send(user);
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
