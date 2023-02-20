const { Router } = require('express');
const router = Router();
const contollers = require('../controllers');

router.get('/users', contollers.read);
router.post('/users', contollers.create);
router.put('/users/:id', contollers.update);
router.delete('/users/:id', contollers.delete);

module.exports = router;