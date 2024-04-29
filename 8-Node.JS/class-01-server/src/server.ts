import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

app.get("/", (_request, response) => {
  response.json({ className: "Class 01 Server" });
});
