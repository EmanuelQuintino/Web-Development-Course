const express = require("express");
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}`));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const database = require('./databases');
database.connect((error) => {
    if (error) throw error;    
    console.log("Database is connected...");
});