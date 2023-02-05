const { Router } = require('express');
const userRoutes = Router();

const userControllers = require('../controllers/userController.js');
userRoutes.get('/', userControllers.index);

module.exports = userRoutes;