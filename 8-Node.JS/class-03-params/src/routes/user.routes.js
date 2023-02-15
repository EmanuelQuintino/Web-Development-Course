const { Router } = require('express');
const userRouter = Router();

//Route Params
userRouter.get('/:id/:name', (req, res) => {
    const {id, name} = req.params;
    res.send(`User:${id} Name:${name}`);
});

//Query Params
userRouter.get('/', (req, res) => {
    const {id, name} = req.query;
    res.send(`User:${id} Name:${name}`);
});

//Body Params
userRouter.post('/', (req, res) => {
    const {id, name} = req.body;
    res.send(`User:${id} Name:${name}`);
    res.json({id, name});
});

module.exports = userRouter;