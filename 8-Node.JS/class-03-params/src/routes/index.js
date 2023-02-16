const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => res.send('Class 03 - Params'));

router.get('/user', (req, res) => res.send('User'));

//Route Params
router.get('/user/:id/:name', (req, res) => {
    const {id, name} = req.params;
    res.send(`User:${id} Name:${name}`);
});

//Query Params
router.get('/user', (req, res) => {
    const {id, name} = req.query;
    res.send(`User:${id} Name:${name}`);
});

//Body Params
router.post('/user', (req, res) => {
    const {id, name} = req.body;
    res.send(`User:${id} Name:${name}`);
    res.json({id, name});
});

module.exports = router;