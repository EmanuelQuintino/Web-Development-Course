const { Router } = require('express');
const router = Router();
const productControllers = require('../controllers');

router.get('/products', productControllers.read);
router.post('/products', productControllers.create);
router.put('/products/:id', productControllers.update);
router.delete('/products/:id', productControllers.delete);

module.exports =router;