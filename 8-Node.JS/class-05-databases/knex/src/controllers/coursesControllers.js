const database = require('../databases');

module.exports = {
    async read(req, res, next) {
            try {
                const table = database('courses');
                const { id } = req.query;
                
                if (id) {
                    table.select().where({id});
                }
                
                const result = await table;
                
                return res.json(result);

            } catch (error) {
                next(error);
            }
    },

    async create(req, res, next) {
        try {
            const { name, hours } = req.body;
            
            await database('courses').insert({
                name, 
                hours
            });

            return res.status(201).send({situation: 'course created'});
            
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { name, hours } = req.body;
            const { id } = req.params;

            await database('courses')
            .update({
                name, 
                hours, 
                updated_at: database.fn.now()
            })
            .where({id});

            return res.send({situation: `updated course ${id}`});

        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            
            await database('courses')
            .del() 
            .where({id});

            return res.send({situation: `course ${id} deleted`});

        } catch (error) {
            next(error);
        }
    }
}