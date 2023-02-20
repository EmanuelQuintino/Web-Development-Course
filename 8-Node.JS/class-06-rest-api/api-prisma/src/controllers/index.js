const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            let listUsers;
            
            if (id) {
                listUsers = await prisma.users.findUnique({where: {id: Number(id)}});
            } else {
                listUsers = await prisma.users.findMany();
            }
            
            res.json({listed: listUsers ?  listUsers : 'User not found!'});
        } catch (error) {
            res.json(error);
        }
    },

    async create(req, res) {
        try {
            const { name, email, password } = req.body;

            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.json({alert: "Email already used!"});

            const passwordHash = await bcrypt.hash(password, 10);

            const createUsers = await prisma.users.create({
                data: {name, email, password: passwordHash}
            });
            return res.json({created: createUsers});
        } catch (error) {
            res.json(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            const passwordHash = await bcrypt.hash(password, 10);
                        
            const updateUsers = await prisma.users.update({
                where: {id: Number(id)}, 
                data: {name, email, password: passwordHash}
            });

            return res.json({updated: updateUsers});
        } catch (error) {
            if (error.code == "P2002") return res.json({alert: "Email already used!"});
            if (error.code == "P2025") return res.json({alert: "User not found!"});
            res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;       
            const deleteUsers = await prisma.users.delete({where: {id: Number(id)}});
            return res.json({deleted: deleteUsers});
        } catch (error) {
            if (error.code == "P2025") return res.json({alert: "User not found!"});
            res.json(error);
        }
    }
}