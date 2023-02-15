const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => res.send('Class 03 - Params'));

const userRoutes = require('./user.routes');
router.use('/user', userRoutes);

module.exports = router;