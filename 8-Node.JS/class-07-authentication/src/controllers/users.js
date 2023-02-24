const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read(req, res) {
        try {
            const users = await prisma.users.findMany();
            return res.json({List: users});
        } catch (error) {
            return res.json({error: error.message});
        }
    }, 
    
    async create(req, res) {
        try {
            const { email, password } = req.body;  
            if (!email) return res.status(400).json({alert: 'Please inform E-mail '});
            if (!password) return res.status(400).json({alert: 'Please inform Password'});
            
            const user = await prisma.users.findUnique({where: {email}});
            if (user) return res.status(400).json({alert: 'E-mail already use'});

            const passwordHash = await bcrypt.hash(password, 10);
            const userCreate = await prisma.users.create({data: {email, password: passwordHash}});
            return res.json({create: userCreate});
        } catch (error) {
            return res.json({error: error.message});
        }
    } 
}