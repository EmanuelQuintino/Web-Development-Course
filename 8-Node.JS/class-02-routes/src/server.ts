import express from "express";
import { router } from "./routes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // parsing JSON data
app.use(express.urlencoded({ extended: true })); // parsing form data

// routers
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
