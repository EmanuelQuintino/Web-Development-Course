import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/appErrors";
import { pageNotFound } from "./errors/pageNotFound";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware for parsing JSON data
app.use(express.urlencoded({ extended: true })); // middleware for parsing form data
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
