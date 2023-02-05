const { Router } = require('express');
const userRoutes = Router();

const userControllers = require('../controllers/userController.js');
userRoutes.get('/', userControllers.index);
userRoutes.post('/', userControllers.create);
userRoutes.put('/:id', userControllers.update);
userRoutes.delete('/:id', userControllers.delete);

module.exports = userRoutes;