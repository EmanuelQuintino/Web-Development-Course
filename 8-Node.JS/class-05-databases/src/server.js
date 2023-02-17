const express = require("express");
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}`));

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const database = require('./databases/mysql');
database.connect((error) => {
    if (error) throw error;    
    console.log("Database is connected...");
});

// const SQL = 'SELECT 1 + 1 AS solution';
// database.query(SQL, (error) => {
//     if (error) throw error;
//     console.log("Database is connected...");
// });
