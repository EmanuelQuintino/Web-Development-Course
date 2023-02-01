const express = require('express');
const app = express();
const port = 3333;

app.listen(port, console.log(`Server is running on port ${port}...`));

app.route('/').get((request, response) => response.send('Class 01 - Server'));