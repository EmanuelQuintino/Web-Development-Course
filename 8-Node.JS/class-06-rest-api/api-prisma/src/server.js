const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on PORT 3000'));

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.$connect()
    .then(() => console.log('Database is connected...'))
    .catch((error) => console.error(error));