import { sqliteConnection } from "../..";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

type UserData = {
  id: string;
  name: string;
  email: string;
  newPassword?: string | null;
};

export async function updateUser({ id, name, email, newPassword }: UserData) {
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
}
