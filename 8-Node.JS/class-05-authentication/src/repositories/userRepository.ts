import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import { sqliteConnection } from "../databases/sqlite3";

type CreateUser = {
  name: string;
  email: string;
  password: string;
};

export const userRepository = {
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
};
