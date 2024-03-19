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
        const userExists = await db.get("SELECT * FROM users WHERE email = ?", [email]);
        if (userExists) throw res.status(400).send({ message: "user already exists!" });

        const userUUID = randomUUID() || uuidv4();
        const passwordHash = await hash(password, 10);

        await db.run(
          "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);",
          [userUUID, name, email, passwordHash]
        );

        return res.status(201).send({ message: "user created!" });
      } else {
        throw res.status(400).send({ message: "missing user data!" });
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

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
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

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, password, newPassword } = req.body;
      const db = await sqliteConnection();

      if (!name || !email) {
        throw res.status(400).send({ message: "missing user data!" });
      }

      if (!password || !newPassword) {
        throw res.status(400).send({ message: "please confirm your password" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).send({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).send({ message: "password not checked!" });
      }

      const userEmail = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (userEmail && userEmail.id != id) {
        throw res.status(400).send({ message: "email already in use!" });
      }

      const passwordHash = await hash(newPassword, 10);
      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

      await db.get(updateQuery, [name, email, passwordHash, id]);
      return res.status(200).send({ message: "user updated!" });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteConnection();

      if (!password) {
        throw res.status(400).send({ message: "please confirm your password" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).send({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).send({ message: "password not checked!" });
      }

      await db.get("DELETE FROM users WHERE id = ?", [id]);
      return res.status(200).send({ message: `user ${user.name} deleted!` });
    } catch (error) {
      next(error);
    }
  },
};
