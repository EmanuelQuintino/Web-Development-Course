const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth');

const userContollers = require('../controllers/users.js'); 
router.get('/users', authMiddleware, userContollers.read);
router.post('/users', userContollers.create);

const loginContollers = require('../controllers/auth.js'); 
router.post('/login', loginContollers.auth);

module.exports = router;