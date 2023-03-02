const { Router } = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/students', controller.read);
router.post('/students', controller.create);
router.put('/students/:id', controller.update);
router.delete('/students/:id', controller.delete);

module.exports = router;