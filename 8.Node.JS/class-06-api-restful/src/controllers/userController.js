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

    async update(req, res, next) {
        try {
            const {name, email} = req.body;
            const {id} = req.params;

            await database('users')
            .update({
                name, 
                email, 
                updated_at: database.fn.now()
            })
            .where({id});

            return res.send({situation: `updated user ${id}`});
        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            await database('users')
            .where({id})
            .del(); 

            return res.send({situation: `user ${id} deleted`});
        } catch (error) {
            next(error);
        }
    }
}