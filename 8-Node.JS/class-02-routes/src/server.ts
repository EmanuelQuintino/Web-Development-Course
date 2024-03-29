import express from "express";
import { router } from "./routes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routers
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
