const { Router } = require('express');
const userRoutes = Router();

const database = require('../database');
userRoutes.get('/', (req, res) => {
    database('users')
        .then((result) => res.json(result))
        .catch((error) => console.error(error));
});

module.exports = userRoutes;