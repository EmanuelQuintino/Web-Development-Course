const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send(`Class 02 - Routes`)
});

router.get('/user', (req, res) => {
    res.send(`User`)
});

router.get('/contact', (req, res) => {
    res.send(`Contato`)
});

module.exports = router;