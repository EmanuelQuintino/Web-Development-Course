const database = require('../databases');
const table = 'courses';

module.exports = {
    read(req, res) {
        const SQL = `SELECT * FROM ${table}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json(result);
        });
    },

    create(req, res) {
        const { name, hours } = req.body;
        const SQL = `INSERT INTO ${table}(name, hours) VALUES("${name}", ${hours})`;
        database.query(SQL, (error) => {
            if (error) throw error;
            res.json({status: 'created'});
        });
    },

    update(req, res) {
        const { id } = req.params;
        const { name, hours } = req.body;
        const SQL = `UPDATE ${table} SET name="${name}", hours=${hours}, updated_at=NOW() WHERE id = ${id}`;
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