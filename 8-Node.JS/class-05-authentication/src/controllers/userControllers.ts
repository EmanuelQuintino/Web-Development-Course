import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepository";
import { z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Name is required!",
              invalid_type_error: "Name must be a string!",
            })
            .min(3, "Name must have at least 3 characters!")
            .max(255, "Max name length exceeded!"),

          email: z
            .string({
              required_error: "Email is required!",
              invalid_type_error: "Email must be a string!",
            })
            .email("Email poorly formatted!")
            .max(255, "Max email length exceeded!"),

          password: z
            .string({
              required_error: "Email is required!",
              invalid_type_error: "Password must be a string!",
            })
            .min(7, "Password must have at least 7 characters!")
            .max(255, "Max password length exceeded!")
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "The password must contain at least one capital letter, one number and one special character!",
            }),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userExists = await userRepository.getByEmail(email);
      if (userExists) throw res.status(400).json({ message: "email already exists!" });

      const userCreated = await userRepository.create({ name, email, password });
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
