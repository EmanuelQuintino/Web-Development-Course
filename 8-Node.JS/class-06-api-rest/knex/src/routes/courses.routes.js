const { Router } = require('express');
const coursesRoutes = Router();
const coursesControllers = require('../controllers/coursesControllers.js');

coursesRoutes.get('/', coursesControllers.read);
coursesRoutes.post('/', coursesControllers.create);
coursesRoutes.put('/:id', coursesControllers.update);
coursesRoutes.delete('/:id', coursesControllers.delete);

module.exports = coursesRoutes;