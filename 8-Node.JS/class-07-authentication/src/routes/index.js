const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth');

const userContollers = require('../controllers/users.js'); 
router.get('/users', userContollers.read);
router.post('/users', userContollers.create);
router.put('/users/:id', userContollers.update);
router.delete('/users/:id', userContollers.delete);

const loginContollers = require('../controllers/auth.js'); 
router.post('/login', loginContollers.auth);

module.exports = router;