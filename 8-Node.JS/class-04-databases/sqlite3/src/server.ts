import express from "express";
import { sqliteConnection } from "./databases/sqlite3";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is runninig on port ${port}!`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Error! Database is not connected: ", error));
