import express from "express";
import { sqliteConnection } from "./databases/sqlite3";
import { router } from "./routes";
import { runMigrations } from "./databases/sqlite3/migrations";
import { pageNotFound } from "./middlewares/pageNotFound";
import { appErrors } from "./middlewares/appErrors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(port, () => {
  console.log(`Server is runninig on port ${port}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Error connection database:", error));

runMigrations();
