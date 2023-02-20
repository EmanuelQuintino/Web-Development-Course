const prisma = require('../databases');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            let users;
            if (id) {
                users = await prisma.users.findUnique({where: {id: Number(id)}});
            } else {
                users = await prisma.users.findMany();
            }
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    },
    
    async create(req, res) {
        try {
            const { name, email, password } = req.body;

            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.json({alert: "Email already used"});

            const createUser = await prisma.users.create({
                data: {name, email, password}
            });

            res.json(createUser);
        } catch (error) {
            res.json(error);
        }
    },

    async update(req, res) {
        try {
            const { name, email, password } = req.body;
            const { id } = req.params;
            const updateUser = await prisma.users.update({
                where: {id: Number(id)},
                data: {name, email, password}
            });  
            res.json(updateUser);  
        } catch (error) {
            res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleteUser = await prisma.users.delete({where: {id: Number(id)}});
            res.json(deleteUser);
        } catch (error) {
            res.json(error);
        }
    }
}