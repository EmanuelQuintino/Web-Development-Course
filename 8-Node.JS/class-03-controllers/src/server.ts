import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/appErrors";
import { pageNotFound } from "./errors/pageNotFound";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});
