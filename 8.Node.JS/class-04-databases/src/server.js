const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}...`));

const database = require('./database');
app.get('/users', (req, res) => {
    database('users')
        .then((result) => {
            res.json(result);
        });
});