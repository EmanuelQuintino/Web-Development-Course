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
      if (userExists) throw res.status(400).json({ message: "email already exists!" });

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
      const { email, password } = req.body;
      return res.status(200).json({ email, password });
    } catch (error) {
      return next(error);
    }
  },
};
