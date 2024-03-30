import { sqliteConnection } from "../..";

export async function getUserByEmail(email: string) {
  const db = await sqliteConnection();
  return await db.get("SELECT * FROM users WHERE email = ?", [email]);
}
