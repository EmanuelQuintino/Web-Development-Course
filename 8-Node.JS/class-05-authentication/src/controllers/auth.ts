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

      const { id, role } = user;

      const token = sign({ id, role }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.EXPIRESIN_TOKEN,
      });

      res.cookie(process.env.KEY_TOKEN, token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 15,
      });

      return res.status(200).json({ message: "login successful!", token });
    } catch (error) {
      return next(error);
    }
  },
};
