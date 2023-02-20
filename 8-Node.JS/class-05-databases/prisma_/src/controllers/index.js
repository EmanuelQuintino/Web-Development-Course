const prisma = require('../databases');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            if (id) {
                res.json(await prisma.users.findUnique({where: {id: Number(id)}}));
            } else {
                res.json(await prisma.users.findMany());
            }
        } catch (error) {
            res.json(error)
        }
    },

    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const createUser = await prisma.users.create({data: {name, email, password}});
            res.json(createUser);
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updateUser = await prisma.users.update({
                where: {id: Number(id)},
                data: {name, email, password}
            });
            res.json(updateUser);
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteUser = await prisma.users.delete({where: {id: Number(id)}});
            res.json(deleteUser);
        } catch (error) {
            res.json({error: error.message});
        }
    }
}