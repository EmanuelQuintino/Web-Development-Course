const { Router } = require('express');
const router = Router();

const userContollers = require('../controllers/users.js'); 
router.post('/users', userContollers.create);

const loginContollers = require('../controllers/auth.js'); 
router.post('/login', loginContollers.auth);

module.exports = router;