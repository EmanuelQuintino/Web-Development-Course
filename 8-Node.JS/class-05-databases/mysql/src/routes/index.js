const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/courses', controllers.read);
router.post('/courses', controllers.create);
router.put('/courses/:id', controllers.update);
router.delete('/courses/:id', controllers.delete);

module.exports = router;