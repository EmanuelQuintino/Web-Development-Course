const knexFile = require('../../knexfile.js');
const database =  require('knex')(knexFile.development);

module.exports = database;