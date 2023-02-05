const database = require('../database');
module.exports = {
    async index(req, res) {
            const result = await database('users'); 
            return res.json(result);
    },
    async create(req, res, next) {
        try {
            const {name, email} = req.body;
            await database('users').insert({
                name, 
                email
            });
            return res.status(201).send({situation: 'user created'});
        } catch (error) {
            next(error);
        }
    },
}