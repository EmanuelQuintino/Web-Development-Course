const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on PORT 3000'));

app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});

const prisma = require('./databases');
prisma.$connect()
    .then(() => console.log('Database is connected...'))
    .catch((error) => console.error(error));