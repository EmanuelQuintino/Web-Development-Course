const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/user', controllers.create);
router.get('/user', controllers.read);
router.put('/user/:id', controllers.update);
router.delete('/user/:id', controllers.delete);

module.exports = router;