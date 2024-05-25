import { sqliteConnection } from "../databases/sqlite3";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

type UserDataCreate = {
  name: string;
  email: string;
  password: string;
};

type UserDataUpdate = {
  id: string;
  name: string;
  email: string;
  newPassword?: string | null;
};

export const userRepository = {
  async create({ name, email, password }: UserDataCreate) {
    const db = await sqliteConnection();
    const userUUID = randomUUID() || uuidv4();
    const passwordHash = await hash(password, 10);

    await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);", [
      userUUID,
      name,
      email,
      passwordHash,
    ]);

    return { status: 201, id: userUUID, message: "user created!" };
  },

  async getByID(id: string) {
    const db = await sqliteConnection();
    return await db.get("SELECT * FROM users WHERE id = ?", [id]);
  },

  async getByEmail(email: string) {
    const db = await sqliteConnection();
    return await db.get("SELECT * FROM users WHERE email = ?", [email]);
  },

  async update({ id, name, email, newPassword }: UserDataUpdate) {
    const db = await sqliteConnection();

    if (newPassword) {
      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, password = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

      const passwordHash = await hash(newPassword, 10);
      await db.run(updateQuery, [name, email, passwordHash, id]);

      return { status: 200, message: "user updated!" };
    } else {
      const updateQuery = `
        UPDATE users
        SET name = ?, email = ?, updated_at = DATETIME('now')
        WHERE id = ?
      `;

      await db.run(updateQuery, [name, email, id]);
      return { status: 200, message: "user updated!" };
    }
  },

  async delete(id: string) {
    const db = await sqliteConnection();
    await db.run("DELETE FROM users WHERE id = ?", [id]);
    return { status: 200, message: "user deleted!" };
  },
};
