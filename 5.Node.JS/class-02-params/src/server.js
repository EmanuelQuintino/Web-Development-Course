const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}....`));

app.get('/', (request, response) => response.send('Class 02 - Params'));

app.get('/user/:id/:name', (request, response) => {
    const {id, name} = request.params;
    response.send(`Route Params - ${name}(${id}).`);
});

app.get('/books', (request, response) => {
    const {book, author, value} = request.query
    response.send(`Query Params - Livro: ${book}, ${author} por R$${value}.`);
});