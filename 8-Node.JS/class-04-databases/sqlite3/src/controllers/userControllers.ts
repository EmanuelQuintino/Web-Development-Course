import { Request, Response, NextFunction } from "express";
import { getUserByEmail } from "../databases/sqlite3/services/userServices/getUserByEmail";
import { createUser } from "../databases/sqlite3/services/userServices/createUser";
import { getUserByID } from "../databases/sqlite3/services/userServices/getUserByID";
import { updateUser } from "../databases/sqlite3/services/userServices/updateUser";
import { deleteUser } from "../databases/sqlite3/services/userServices/deleteUser";
import { compare } from "bcrypt";
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

      const userExists = await getUserByEmail(email);
      if (userExists) throw res.status(400).json({ message: "email already exists!" });

      const userCreated = await createUser({ name, email, password });

      return res.status(201).json({ message: "user created!", ...userCreated });
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

      const user = await getUserByID(id);
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

      const user = await getUserByID(id);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "invalid password!" });
      }

      const userEmail = await getUserByEmail(email);
      if (userEmail && userEmail.id != id) {
        throw res.status(400).json({ message: "email already exists!" });
      }

      await updateUser({ id, name, email, newPassword });

      return res.status(200).json({ message: "user updated!" });
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res.status(400).json({ message: "please, confirm your password!" });
      }

      const user = await getUserByID(id);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "invalid password!" });
      }

      await deleteUser(id);

      return res.status(200).json({ message: `user ${user.name} deleted!` });
    } catch (error) {
      return next(error);
    }
  },
};
