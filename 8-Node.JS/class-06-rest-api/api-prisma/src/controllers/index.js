const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            let result;
            
            if (id) {
                result = await prisma.users.findUnique({where: {id: Number(id)}});
            } else {
                result = await prisma.users.findMany();
            }
            
            res.json({listed: result});
        } catch (error) {
            res.json(error);
        }
    },

    async create(req, res) {
        try {
            const { name, age, cpf } = req.body;

            const userCPF = await prisma.users.findUnique({where: {cpf}});
            if (userCPF) return res.json({alert: "CPF already used!"});

            const reault = await prisma.users.create({data: {name, age, cpf}});
            return res.json({created: reault});
        } catch (error) {
            res.json(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, age, cpf } = req.body;
                        
            const reault = await prisma.users.update({
                where: {id: Number(id)}, 
                data: {name, age, cpf}
            });

            return res.json({updated: reault});
        } catch (error) {
            if (error.code == "P2002") return res.json({alert: "CPF already used!"});
            if (error.code == "P2025") return res.json({alert: "User not found!"});
            res.json(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;       
            const reault = await prisma.users.delete({where: {id: Number(id)}});
            return res.json({deleted: reault});
        } catch (error) {
            if (error.code == "P2025") return res.json({alert: "User not found!"});
            res.json(error);
        }
    }
}