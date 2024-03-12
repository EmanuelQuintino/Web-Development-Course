const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on PORT 3000'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const prisma = require('./databases');
prisma.$connect()
    .then(() => console.log('Database is connected...'))
    .catch((error) => console.error(error));