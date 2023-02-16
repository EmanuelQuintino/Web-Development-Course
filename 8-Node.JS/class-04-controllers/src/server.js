const express = require("express");
const { route } = require("./routes");
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}...`));

const routes = require('./routes');
app.use(routes);