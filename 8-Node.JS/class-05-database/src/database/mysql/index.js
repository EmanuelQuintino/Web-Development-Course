const mysql = require('mysql2');

async function connection() {
    const database = await mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'school'
    });
    
    const SQL = 'SELECT 1 + 1 AS solution';
    database.query(SQL, (error) => {
        if (error) throw error;
        console.log("Database is connected...");
    });

    return database;
}

module.exports = connection;