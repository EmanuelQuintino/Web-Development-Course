import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          email: z
            .string({
              invalid_type_error: "only text!",
            })
            .email({ message: "email badly formatted!" })
            .max(255, "max email length exceeded!"),

          password: z
            .string({
              invalid_type_error: "for the password, use the string type!",
            })
            .max(255, "max password length exceeded!"),
        })
        .strict();

      const { email, password } = userSchema.parse(req.body);

      const user = await userRepository.getByEmail(email);
      if (!user) throw res.status(401).json({ message: "email or password invalid!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "email or password invalid!" });
      }

      const token = sign({ id: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      res.cookie(process.env.KEY_TOKEN, token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 15,
      });

      return res.status(200).json({ message: "login successful!" });
    } catch (error) {
      return next(error);
    }
  },
};
