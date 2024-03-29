import { sqliteConnection } from "../..";

export async function deleteUser(id: string) {
  const db = await sqliteConnection();
  return await db.get("DELETE FROM users WHERE id = ?", [id]);
}
