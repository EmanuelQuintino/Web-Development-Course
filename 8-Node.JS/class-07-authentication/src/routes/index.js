const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth');

const userControllers = require('../controllers/users');
router.get('/users', userControllers.read);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);

const loginControllers = require('../controllers/auth');
router.post('/login', loginControllers.auth);

router.get('/system', authMiddleware, (req, res) => {
    return res.json({system: true, status: "authorized", user: req.userID});
});

module.exports = router;