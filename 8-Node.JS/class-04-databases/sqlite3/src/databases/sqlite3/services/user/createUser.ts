import { sqliteConnection } from "../..";
import { randomUUID } from "node:crypto";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

type UserData = {
  name: string;
  email: string;
  password: string;
};

export async function createUser({ name, email, password }: UserData) {
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
}
