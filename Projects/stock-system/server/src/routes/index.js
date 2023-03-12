const { Router } = require('express')
const router = Router();
const controllers = require('../controllers');

router.get('/products', controllers.read);
router.post('/products', controllers.create);
router.put('/products/:id', controllers.update);
router.delete('/products/:id', controllers.delete);

module.exports = router;