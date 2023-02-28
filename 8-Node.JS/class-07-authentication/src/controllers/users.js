const prisma = require('../databases');

module.exports = {
    async read (req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const listUser = await prisma.users.findUnique({where: {id: Number(id)}});
                return  listUser ? 
                    res.json(listUser) :
                    res.json('User not found');
            } else {
                const listUsers = await prisma.users.findMany();
                return res.json(listUsers); 
            }
        } catch (error) {
            return res.json(error);
        }
    },

    async create(req, res) {
        try {
            const { email, password } = req.body;
            if (!email) return res.status(400).json('Email is required');
            if (!password) return res.status(400).json('Password is required');
            
            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.json('Email already used');

            const createUser =await prisma.users.create({data: {email, password}});
            return res.status(201).json(`User ${createUser.id} created`);
        } catch (error) {
            return res.json(error);
        }
    },

    async update(req, res) {
        try {
            const {email, password} = req.body;
            if (!email) return res.status(400).json('Email is required');
            if (!password) return res.status(400).json('Password is required');
            
            const { id } = req.params;
            const user = prisma.users.update({where: {id: Number(id)}});
            if(!user) return res.json('User not found').status(400);

            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.json('Email already used');

            const updateUser = await prisma.users.update({
                data: {email, password},
                where: {id: Number(id)}
            });
            return res.json(`User ${updateUser.id} updated`);
        } catch (error) {
            return res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.users.findUnique({where: {id: Number(id)}});
            if(!user) return res.json('User not found');  
            
            const deleteUser = await prisma.users.delete({where: {id: Number(id)}});
            return res.json(`User ${deleteUser.id} deleted`);
        } catch (error) {
            return res.json(error);
        }
    }
}