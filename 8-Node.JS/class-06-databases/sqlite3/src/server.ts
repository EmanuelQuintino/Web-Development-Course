import express from "express";
import { sqliteConnection } from "./databases/sqlite3";
import { router } from "./routes";
import { runMigrations } from "./databases/sqlite3/migrations";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErrors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is runninig on PORT ${PORT}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Database is not connected - ", error));

runMigrations();
