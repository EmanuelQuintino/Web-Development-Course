const { Router } = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/users', controller.read);

module.exports = router;