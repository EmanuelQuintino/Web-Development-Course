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
            console.error(error);
        }
    },

    async create(req, res) {
        try {
            const { name, age, cpf } = req.body;
            
            const userCPF = await prisma.users.findUnique({where: {cpf}});
            if (userCPF) return res.json({alert: "CPF already used"});
            
            const reault = await prisma.users.create({
                data: {
                    name,
                    age,
                    cpf
                }
            });
            return res.json({created: reault});
        } catch (error) {
            console.error(error);
        }
    },

    async update(req, res) {
        try {
            const { name, age, cpf } = req.body;
            
            const userCPF = await prisma.users.findUnique({where: {cpf}});
            if (userCPF) return res.json({alert: "CPF already used"});
            
            const reault = await prisma.users.create({
                data: {
                    name,
                    age,
                    cpf
                }
            });
            return res.json({created: reault});
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        try {
            const { name, age, cpf } = req.body;
            
            const userCPF = await prisma.users.findUnique({where: {cpf}});
            if (userCPF) return res.json({alert: "CPF already used"});
            
            const reault = await prisma.users.create({
                data: {
                    name,
                    age,
                    cpf
                }
            });
            return res.json({created: reault});
        } catch (error) {
            console.error(error);
        }
    }
}