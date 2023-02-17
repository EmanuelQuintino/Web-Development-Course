const database = require('../databases/mysql');

module.exports = {
    read(req, res) {
        const SQL = 'SELECT * FROM studants';
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json(result);
        });
    },

    create(req, res) {
        const { name, age } = req.body;
        const SQL = `INSERT INTO studants(name, age) VALUES("${name}", ${age})`;
        database.query(SQL, (error) => {
            if (error) throw error;
            res.json({status: 'created'});
        });
    },

    update(req, res) {
        const { id } = req.params;
        const { name, age } = req.body;
        const SQL = `UPDATE studants SET name="${name}", age = ${age} WHERE id = ${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({status: 'updated'});
        });
    },
    
    delete(req, res) {
        const { id } = req.params;
        const SQL = `DELETE FROM studants WHERE id=${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({status: 'deleted'});
        });
    },
}