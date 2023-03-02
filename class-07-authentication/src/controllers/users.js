const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read (req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const listUser = await prisma.users.findUnique({where: {id: Number(id)}});
                return listUser ? 
                    res.json(listUser) : 
                    res.json('User not found!');
            } else {
                const listUsers = await prisma.users.findMany();
                return res.json(listUsers);
            }
        } catch (error) {
            return res.send(error.message);
        }
    },

    async create(req, res) {
        try {
            const { email, password } =req.body;
            if (!email) return res.status(400).json('Email required');  
            if (!password) return res.status(400).json('Password required');
            
            const userEmail = await prisma.users.findUnique({where: {email}});
            if(userEmail) return res.status(400).json('Email already used');

            const passwordHash = await bcrypt.hash(password, 10);

            const userCreate = await prisma.users.create({
                data: {email, password: passwordHash}
            });
            return res.status(201).json(userCreate);
        } catch (error) {
            return res.send(error.message);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const {email, password} = req.body;

            if (!email) return res.status(400).json('Email required');  
            if (!password) return res.status(400).json('Password required');

            const user = await prisma.users.findUnique({where: {id: Number(id)}});
            if(!user) return res.status(400).json('User not found');
            
            const userEmail = await prisma.users.findUnique({where: {email}});
            if(userEmail) return res.status(400).json('Email already used');

            const passwordHash = await bcrypt.hash(password, 10);

            const userUpdate = await prisma.users.update({
                data: {email, password: passwordHash},
                where: {id: Number(id)}
            });
            return res.json(userUpdate);
        } catch (error) {
            return res.send(error.message);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const user = await prisma.users.findUnique({where: {id: Number(id)}});
            if(!user) return res.status(400).json('User not found');
            
            const userDelete = await prisma.users.delete({
                where: {id: Number(id)}
            });
            return res.json(userDelete);
        } catch (error) {
            return res.send(error.message);
        }
    }
}