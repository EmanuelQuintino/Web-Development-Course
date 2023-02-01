const express = require('express');
const app = express();
const port = 3333;

app.get('/', (request, response) => response.send('Class 02 - Params'));

app.listen(port, () => console.log(`Server is running on port ${port}....`));