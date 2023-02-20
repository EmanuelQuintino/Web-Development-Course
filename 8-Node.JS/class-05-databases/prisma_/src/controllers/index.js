const prisma = require('../databases');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            
            if (id) {
                const listUser = await prisma.users.findUnique({where: {id: Number(id)}});
                res.json(listUser);
            } else {
                const listUsers = await prisma.users.findMany();
                res.json(listUsers);
            }
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async create(req, res) {
        try {
            const { name, age } = req.body;
            const createUser = await prisma.users.create({data: {name, age}});
            res.json({create: createUser});
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, age } = req.body;
            const updateUser = await prisma.users.update({
                data: {name, age},
                where: {id: Number(id)}
            });
            res.json({update: updateUser});
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteUser = await prisma.users.delete({where: {id: Number(id)}});
            res.json({delete: deleteUser});
        } catch (error) {
            res.json({error: error.message});
        }
    }
}