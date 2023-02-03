const express = require('express');
const userRouter = express();

userRouter.post("/", (req, res) => {
    const {name, email, password} = req.body;
    res.json({name, email, password});
});

module.exports = userRouter;