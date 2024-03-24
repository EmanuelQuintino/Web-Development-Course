import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (!user) throw res.status(401).json({ message: "email or password invalid!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "email or password invalid!" });
      }

      const { id } = user;

      const token = sign({ id }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      return res.status(200).json({ id, token });
    } catch (error) {
      return next(error);
    }
  },
};
