const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('Class 04 - Controllers'));

router.post('/user', (req, res) => {
    const {id, name} = req.body;
    res.send({id, name});
});

module.exports = router;