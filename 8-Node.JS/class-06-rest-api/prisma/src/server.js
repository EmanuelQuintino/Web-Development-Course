const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on PORT 3000'));

app.use(express.json());

const routes = require('./routes');
app.use(routes);