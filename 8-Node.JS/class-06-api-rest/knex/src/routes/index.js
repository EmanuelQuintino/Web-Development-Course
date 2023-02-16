const { Router } = require('express');
const routes = Router();

const coursesRoutes = require('./courses.routes');
routes.use('/courses', coursesRoutes);

module.exports = routes;