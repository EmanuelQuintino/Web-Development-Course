import express from "express";
import { router } from "./routes";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErrors";
import { UPLOADS_FOLDER } from "./configs/uploadConfigs";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/file", express.static(UPLOADS_FOLDER)); // route to view files

app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
