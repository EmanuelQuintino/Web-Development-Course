import { sqliteConnection } from "../..";

export async function getUserByID(id: string) {
  const db = await sqliteConnection();
  return await db.get("SELECT * FROM users WHERE id = ?", [id]);
}
