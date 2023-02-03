const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on port ${port}....`));

// Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('Class 02 - Params'));

// Route Params
app.get('/user/:id/:name', (request, response) => {
    const {id, name} = request.params;
    response.send(`Route Params - ${name}(${id}).`);
});

// Query Params
app.get('/books', (request, response) => {
    const {book, author, value} = request.query
    response.send(`Query Params - Livro: ${book}, ${author} por R$${value}.`);
});

// Body Params
app.post('/', (req, res) => {
    const {name, email} = req.body;
    res.send(`POST: ${name}`);
});