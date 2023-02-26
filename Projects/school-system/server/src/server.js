const express = require('express');
const app = express();
const routes = require('./routes');
const prisma = require('./database');

app.listen(3000, console.log('Server is running on port 3000'));
app.use(express.json());
app.use(routes);

prisma.$connect()
    .then(() => console.log('Database is connected...'))
    .catch((error) => console.error(error));
