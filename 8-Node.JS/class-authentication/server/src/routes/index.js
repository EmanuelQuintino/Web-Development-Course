const { Router } = require('express');
const router = Router();
const userControllers = require('../controllers/users');
const loginControllers = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');
const prisma = require('../databases');

router.get('/users', userControllers.read);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);

router.post('/login', loginControllers.auth);

router.get('/home', authMiddleware, async (req, res) => {
    const id = req.userID;
    const user = await prisma.users.findUnique({where: {id: Number(id)}});
    return res.json({system: true, id, email: user.email, status: "authorized"});
});

module.exports = router;