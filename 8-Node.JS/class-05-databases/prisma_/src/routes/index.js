const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/users', controllers.read);

module.exports = router;