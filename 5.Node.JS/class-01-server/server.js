const express = require('express');

const app = express();

app.listen('3333', console.log("Server is running..."));

app.route('/').get((request, response) => response.send('Class 01 - Server'));