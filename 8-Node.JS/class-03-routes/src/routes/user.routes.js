const express = require('express');
const userRouter = express();

userRouter.post("/", (req, res) => {
    const {name, phone} = req.body;
    res.json({name, phone});
});

module.exports = userRouter;