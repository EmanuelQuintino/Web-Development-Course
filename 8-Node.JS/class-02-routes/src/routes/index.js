const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => res.send('Class 02 - Routes'));

router.get('/user/:id/:name', (req, res) => {
    const {id, name} = req.params;
    res.send(`Route Params - ID: ${id} Name: ${name}`);
});

router.get('/user', (req, res) => {
    const {id, name} = req.query;
    res.send(`Query Params - ID: ${id} Name: ${name}`);
});

// router.post('/user', (req, res) => {
//     const {id, name} = req.body;
//     // res.send(`Body Params - ID: ${id} Name: ${name}`);
//     res.json({id, name});
// });

const userRoutes = require('./user.routes');
router.use('/user', userRoutes);

module.exports = router;