const mysql = require('mysql2');

async function connection() {
    const database = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
    
    // const SQL = 'SELECT 1 + 1 AS solution';
    // database.query(SQL, (error) => {
    //     if (error) throw error;
    //     console.log("Database is connected...");
    // });

    database.connect((error) => {
        if (error) throw error;    
        console.log("Database is connected...");
    });

    return database;
}

module.exports = connection;