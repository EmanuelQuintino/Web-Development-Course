const { Router } = require('express');
const router = Router();

const controller = require('../controllers');
router.get('/studants', controller.read);
router.post('/studants', controller.create);
router.put('/studants/:id', controller.update);
router.delete('/studants/:id', controller.delete);

module.exports = router;