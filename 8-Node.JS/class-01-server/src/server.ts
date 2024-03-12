import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

app.route("/").get((_request, response) => {
  response.send({ className: "Class 01 Server" });
});
