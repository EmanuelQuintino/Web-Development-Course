import express from "express";
import { router } from "./routes";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErrors";
import "dotenv/config";
import { UPLOADS_FOLDER } from "./configs/uploadConfigs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/file", express.static(UPLOADS_FOLDER));
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is runninig on PORT ${PORT}...`);
});
