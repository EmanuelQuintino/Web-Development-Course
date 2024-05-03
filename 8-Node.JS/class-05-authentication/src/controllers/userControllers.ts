import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepository";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "name is required!",
              invalid_type_error: "name must be a string!",
            })
            .min(3, "name must have at least 3 characters!")
            .max(255, "max name length exceeded!"),

          email: z
            .string({
              required_error: "email is required!",
              invalid_type_error: "email must be a string!",
            })
            .email("email poorly formatted!")
            .max(255, "max email length exceeded!"),

          password: z
            .string({
              required_error: "email is required!",
              invalid_type_error: "password must be a string!",
            })
            .min(7, "password must have at least 7 characters!")
            .max(255, "max password length exceeded!")
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "the password must contain at least one capital letter, one number and one special character!",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userExists = await userRepository.getByEmail(email);
      if (userExists) throw res.status(400).json({ message: "email already exists!" });

      const userUUID = randomUUID() || uuidv4();
      const passwordHash = await hash(password, 10);

      const userCreated = await userRepository.create({
        id: userUUID,
        name,
        email,
        password: passwordHash,
      });

      return res.status(201).json({ message: "user created!", ...userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = req.userID;

      const user = await userRepository.getByID(userID);
      if (!user) throw res.status(404).json({ message: "user not found!" });

      const { name, email } = user;
      return res.status(200).send({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};
