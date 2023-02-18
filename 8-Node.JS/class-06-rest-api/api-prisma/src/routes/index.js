const { Router } = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/users', controller.read);
router.post('/users', controller.create);
router.put('/users', controller.update);
router.delete('/users', controller.delete);

module.exports = router;