const { Router } = require('express');
const router = Router();

const userControllers = require('../controllers/users.js');
router.get('/users', userControllers.read);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);

const loginControllers = require('../controllers/auth');
router.post('/login', loginControllers.auth);

module.exports = router;