import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { hash, compare } from "bcrypt";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z
          .string({
            required_error: "name is required!",
            invalid_type_error: "name must be a string!",
          })
          .min(3, { message: "name must have at least 3 characters" }),

        email: z.string({ required_error: "email is required!" }).email("invalid email!"),

        password: z
          .string({ required_error: "password is required!" })
          .min(7, { message: "password must have at least 7 characters" }),
      });

      const { name, email, password } = userSchema.parse(req.body);
      const db = await sqliteConnection();

      const userExists = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (userExists) throw res.status(400).json({ message: "email already in use!" });

      const userUUID = randomUUID() || uuidv4();
      const passwordHash = await hash(password, 10);

      await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);", [
        userUUID,
        name,
        email,
        passwordHash,
      ]);

      return res.status(201).json({ message: "user created!", id: userUUID });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res.status(400).json({ message: "please confirm your password" });
      }

      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "invalid password!" });
      }

      const { name, email } = user;
      return res.status(200).send({ name, email });
    } catch (error) {
      return next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z
          .string({
            required_error: "name is required!",
            invalid_type_error: "name must be a string!",
          })
          .min(3, { message: "name must have at least 3 characters" }),

        email: z.string({ required_error: "email is required!" }).email("invalid email!"),

        password: z.string({ required_error: "please, confirm your password!" }),

        newPassword: z
          .string()
          .min(7, { message: "password must have at least 7 characters" })
          .nullable(),
      });

      const { id } = req.params;
      const { name, email, password, newPassword } = userSchema.parse(req.body);
      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "invalid password!" });
      }

      const userEmail = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (userEmail && userEmail.id != id) {
        throw res.status(400).json({ message: "email already in use!" });
      }

      if (newPassword) {
        const passwordHash = await hash(newPassword, 10);
        const updateQuery = `
          UPDATE users
          SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
          WHERE id = ?
        `;

        await db.run(updateQuery, [name, email, passwordHash, id]);
      } else {
        const updateQuery = `
            UPDATE users
            SET name = ?, email = ?, updated_at = DATETIME('now')
            WHERE id = ?
          `;

        await db.run(updateQuery, [name, email, id]);
      }

      return res.status(200).json({ message: "user updated!" });
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteConnection();

      if (!password) {
        throw res.status(400).json({ message: "please, confirm your password!" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "invalid password!" });
      }

      await db.get("DELETE FROM users WHERE id = ?", [id]);
      return res.status(200).json({ message: `user ${user.name} deleted!` });
    } catch (error) {
      return next(error);
    }
  },
};
