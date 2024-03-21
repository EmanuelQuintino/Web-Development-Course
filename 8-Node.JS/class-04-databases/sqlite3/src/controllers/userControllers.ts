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
            required_error: "nome obrigatório!",
            invalid_type_error: "nome deve ser um texto!",
          })
          .min(3, { message: "nome com mínimo de 3 caracteres!" }),

        email: z
          .string({ required_error: "email obrigatório!" })
          .email("Email inválido!"),

        password: z.string({ required_error: "senha obrigatória!" }),
      });

      const { name, email, password } = userSchema.parse(req.body);
      const db = await sqliteConnection();

      const userExists = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (userExists) throw res.status(400).json({ message: "email já em uso!" });

      const userUUID = randomUUID() || uuidv4();
      const passwordHash = await hash(password, 10);

      await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);", [
        userUUID,
        name,
        email,
        passwordHash,
      ]);

      return res.status(201).json({ message: "usuário criado com sucesso!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;
      const db = await sqliteConnection();

      if (!password) {
        throw res.status(400).json({ message: "please confirm your password" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "usuário não encontrado!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "senha inválida!" });
      }

      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z
          .string({
            required_error: "nome obrigatório!",
            invalid_type_error: "nome deve ser um texto!",
          })
          .min(3, { message: "nome com mínimo de 3 caracteres!" }),

        email: z
          .string({ required_error: "email obrigatório!" })
          .email("Email inválido!"),

        password: z.string({ required_error: "por favor, confirme sua senha!" }),

        newPassword: z
          .string()
          .min(7, { message: "senha com mínimo de 7 caracteres!" })
          .nullable(),
      });

      const { id } = req.params;
      const { name, email, password, newPassword } = userSchema.parse(req.body);
      const db = await sqliteConnection();

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "usuário não encontrado!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "senha inválida!" });
      }

      const userEmail = await db.get("SELECT * FROM users WHERE email = ?", [email]);
      if (userEmail && userEmail.id != id) {
        throw res.status(400).json({ message: "email já em uso!" });
      }

      if (newPassword) {
        const passwordHash = await hash(newPassword, 10);
        const updateQuery = `
          UPDATE users
          SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
          WHERE id = ?
        `;

        await db.get(updateQuery, [name, email, passwordHash, id]);
      } else {
        const updateQuery = `
            UPDATE users
            SET name = ?, email = ?, updated_at = DATETIME('now')
            WHERE id = ?
          `;

        await db.get(updateQuery, [name, email, id]);
      }

      return res.status(200).json({ message: "usuário atualizado com sucesso!" });
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
        throw res.status(400).json({ message: "por favor, confirme sua senha!" });
      }

      const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);
      if (!user) throw res.status(404).json({ message: "usuário não encontrado!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "senha inválida!" });
      }

      await db.get("DELETE FROM users WHERE id = ?", [id]);
      return res
        .status(200)
        .json({ message: `usuário ${user.name} deletado com sucesso!` });
    } catch (error) {
      return next(error);
    }
  },
};
