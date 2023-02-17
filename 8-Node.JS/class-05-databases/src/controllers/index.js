const database = require('../databases/mysql');

module.exports = {
    create(req, res) {
        const { name, age } = req.body;
        const SQL = `INSERT INTO studants(name, age) VALUES("${name}", ${age})`;
        database.query(SQL, (error) => {
            if (error) throw error;
            res.json({Situation: `Estudante ${name} cadastrado`});
        });
    },

    read(req, res) {
        const SQL = 'SELECT * FROM studants';
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({result});
        });
    },

    update(req, res) {
        const { name, age } = req.body;
        const { id } = req.params;
        const SQL = `UPDATE studants SET name="${name}", age = ${age} WHERE id = ${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({Situation: `Estudante ID:${id} atualizado`});
        });
    },
    
    delete(req, res) {
        const { id } = req.params;
        const SQL = `DELETE FROM studants WHERE id=${id}`;
        database.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({Situation: `Estudante ID:${id} deletado`});
        });
    },
}