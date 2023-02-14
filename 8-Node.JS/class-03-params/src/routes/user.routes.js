const express = require('express');
const userRouter = express();

userRouter.post("/", (req, res) => {
    const {id, name} = req.body;
    res.json({id, name});
});

module.exports = userRouter;