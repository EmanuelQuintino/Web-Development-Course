const database = require('../database');
module.exports = {
    async index(req, res) {
            const result = await database('users'); 
            return res.json(result);
    },
    async create(req, res) {
        const {name, email} = req.body;
        await database('users').insert({
            name, 
            email
        });
    },
}