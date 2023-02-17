const database = require('../databases/mysql');
const table = 'users';

module.exports = {
    read(req, res) {
        const SQL = `SELECT * FROM ${table}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json(result);
        });
    },

    create(req, res) {
        const { name, age } = req.body;
        const SQL = `INSERT INTO ${table}(name, age) VALUES("${name}", ${age})`;
        database.query(SQL, (error) => {
            if (error) throw error;
            res.json({status: 'created'});
        });
    },

    update(req, res) {
        const { id } = req.params;
        const { name, age } = req.body;
        const SQL = `UPDATE ${table} SET name="${name}", age=${age}, updated_at=NOW() WHERE id = ${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({status: 'updated'});
        });
    },
    
    delete(req, res) {
        const { id } = req.params;
        const SQL = `DELETE FROM ${table} WHERE id=${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({status: 'deleted'});
        });
    },
}