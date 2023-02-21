const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read(req, res, next) {
        try {
            const { id } = req.query;
            
            if (id) {
                const listUser = await prisma.users.findUnique({where: {id: Number(id)}});
                listUser ?  res.json({listed: listUser}) : res.status(400).json({alert: 'User not found'});
            } else {
                const listUsers = await prisma.users.findMany();
                res.json({listed: listUsers});
            }
        } catch (error) {
            if (error.code == "P2021") return res.status(500).json({alert: "Table not found"});
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const { name, email, password } = req.body;

            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.status(400).json({alert: "Email already used"});

            const passwordHash = await bcrypt.hash(password, 10);

            const createUsers = await prisma.users.create({
                data: {name, email, password: passwordHash}
            });
            return res.json({created: createUsers});
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, email, password, confirmPassword } = req.body;
            const user = await prisma.users.findUnique({where: {id: Number(id)}});
            
            if (!user) return res.status(400).json({alert: "User not found"});
            if (!confirmPassword) return res.status(400).json({alert: "Please confirm your password"});
            
            const checkPassword = await bcrypt.compare(confirmPassword, user.password);
            if (checkPassword) {
                const passwordHash = await bcrypt.hash(password, 10);          
                const updateUsers = await prisma.users.update({
                    where: {id: Number(id)}, 
                    data: {name, email, password: passwordHash}
                });
                return res.json({updated: updateUsers});
            } else {
                res.status(401).json({alert: "Incorrect password"});   
            }
        } catch (error) {
            if (error.code == "P2002") return res.status(400).json({alert: "Email already used"});
            if (error.code == "P2025") return res.status(400).json({alert: "User not found"});
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const { password } = req.body;
            const user = await prisma.users.findUnique({where: {id: Number(id)}});

            if(!user) return res.status(400).json({alert: 'User not found'});
            if(!password) return res.status(400).json({alert: 'Please confirm your password'});

            const checkPassword = await bcrypt.compare(password, user.password);
            if (checkPassword) {
                const deleteUsers = await prisma.users.delete({where: {id: Number(id)}});
                return res.json({deleted: deleteUsers});
            } else {
                res.status(401).json({alert: 'Incorrect password'});
            }            
        } catch (error) {
            next(error);
        }
    }
}