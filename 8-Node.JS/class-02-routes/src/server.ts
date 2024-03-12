import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});

// Middleware
app.use(express.json());

import { router } from "./routes";
app.use(router);
