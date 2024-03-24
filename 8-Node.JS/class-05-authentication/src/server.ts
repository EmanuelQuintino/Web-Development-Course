import express from "express";
import { routes } from "./routes";
import { sqliteConnection } from "./databases/sqlite3";
import { runMigrations } from "./databases/sqlite3/migrations";
import { appErrors } from "./middlewares/appErrors";
import { pageNotFound } from "./middlewares/pageNotFound";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Database is not connected - ", error));

runMigrations();
