const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/users', controllers.read);
router.post('/users', controllers.create);
router.put('/users/:id', controllers.update);
router.delete('/users/:id', controllers.delete);

module.exports = router;