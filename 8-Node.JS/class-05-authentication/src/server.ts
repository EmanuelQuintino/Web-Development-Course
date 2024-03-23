import express from "express";
import { routes } from "./routes";
import { sqliteConnection } from "./databases/sqlite3";
import { runMigrations } from "./databases/sqlite3/migrations";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Database is not connected - ", error));

runMigrations();
