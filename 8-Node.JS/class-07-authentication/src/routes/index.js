const { Router } = require('express');
const router = Router();
const contollers = require('../controllers');

router.get('/user', contollers.read);
router.post('/user', contollers.create);
router.put('/user/:id', contollers.update);
router.delete('/user/:id', contollers.delete);

module.exports = router;