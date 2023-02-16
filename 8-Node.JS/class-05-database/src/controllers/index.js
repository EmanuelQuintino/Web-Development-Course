const database = require('../database/mysql');

module.exports = {
    async create(req, res) {
        const { name, age } = req.body;
        const SQL = `INSERT INTO studants(name, age) VALUES("${name}", ${age})`;
        const connection = await database();                 
        connection.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({Situation: `Estudante ${name} cadastrado`});
        });
    },

    async read(req, res) {
        const connection = await database();                 
        const SQL = 'SELECT * FROM studants';
        connection.query(SQL, (error, result) => {
            if (error) throw error;
            res.json({result});
        });
    },

    async update(req, res) {
        const { name, age } = req.body;
        const { id } = req.params;
        const SQL = `UPDATE studants SET name="${name}", age = ${age} WHERE id = ${id}`;
        const connection = await database();                 
        connection.query(SQL, (error) => {
            if (error) throw error;
            res.json({Situation: `Estudante ID:${id} atualizado`});
        });
    },

    async delete(req, res) {
        const { id } = req.params;
        const SQL = `DELETE FROM studants WHERE id=${id}`;
        const connection = await database();                 
        connection.query(SQL, (error) => {
            if (error) throw error;
            res.json({Situation: `Estudante ID:${id} deletado`});
        });
    },
}