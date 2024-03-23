import { sqliteConnection } from "..";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
  const schemas = [tableUsers].join("");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error("Migration Error - ", error));
}
