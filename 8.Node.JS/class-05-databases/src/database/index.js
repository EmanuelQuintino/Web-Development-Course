const knexFile = require('../../knexfile.js');
const database =  require('knex')(knexFile.development);

database.raw('SELECT 1+1 AS result')
.then(() => console.log('Database is connected...'))
.catch((error) => console.error(`Failed to connect Database: ${error}`));

module.exports = database;