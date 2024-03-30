import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import { sqliteConnection } from "../databases/sqlite3";

type CreateUser = {
  name: string;
  email: string;
  password: string;
};

type UpdateUser = {
  id: string;
  name: string;
  email: string;
  newPassword?: string | null;
};

export const userRepositories = {
  async create({ name, email, password }: CreateUser) {
    const db = await sqliteConnection();
    const userUUID = randomUUID() || uuidv4();
    const passwordHash = await hash(password, 10);

    await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);", [
      userUUID,
      name,
      email,
      passwordHash,
    ]);

    return { status: 201, id: userUUID };
  },

  async getByID(id: string) {
    const db = await sqliteConnection();
    return await db.get("SELECT * FROM users WHERE id = ?", [id]);
  },

  async getByEmail(email: string) {
    const db = await sqliteConnection();
    return await db.get("SELECT * FROM users WHERE email = ?", [email]);
  },

  async update({ id, name, email, newPassword }: UpdateUser) {
    const db = await sqliteConnection();

    if (newPassword) {
      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

      const passwordHash = await hash(newPassword, 10);
      return await db.run(updateQuery, [name, email, passwordHash, id]);
    } else {
      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

      return await db.run(updateQuery, [name, email, id]);
    }
  },

  async delete(id: string) {
    const db = await sqliteConnection();
    return await db.get("DELETE FROM users WHERE id = ?", [id]);
  },
};
