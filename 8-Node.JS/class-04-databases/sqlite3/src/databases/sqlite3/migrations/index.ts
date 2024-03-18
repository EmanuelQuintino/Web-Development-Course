import { sqliteConnection } from "..";
import { createTableUsers } from "./createTableUsers";

export async function runMigrations() {
  const schemas = [createTableUsers].join("");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error("Error migrations:", error));
}
