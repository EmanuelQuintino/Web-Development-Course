const { Router } = require('express');
const router = Router();

const userContollers = require('../controllers/users.js'); 
router.post('/users', userContollers.create);

module.exports = router;