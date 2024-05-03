import { sqliteConnection } from "../databases/sqlite3";

type CreateUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const userRepository = {
  async create({ id, name, email, password }: CreateUser) {
    const db = await sqliteConnection();

    await db.run("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?);", [
      id,
      name,
      email,
      password,
    ]);

    return { status: 201, id };
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
