const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on PORT ${port}...`));

var cors = require('cors');
app.use(cors());

app.use(express.json());

const routes = require('./routes');
app.use(routes);

app.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});