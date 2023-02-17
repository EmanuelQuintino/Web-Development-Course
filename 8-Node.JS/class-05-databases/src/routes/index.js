const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/studants', controllers.read);
router.post('/studants', controllers.create);
router.put('/studants/:id', controllers.update);
router.delete('/studants/:id', controllers.delete);

module.exports = router;