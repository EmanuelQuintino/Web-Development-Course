const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read(req, res, next) {
        try {
            const { id } = req.query;
            let listUsers;
            
            if (id) {
                listUsers = await prisma.users.findUnique({where: {id: Number(id)}});
            } else {
                listUsers = await prisma.users.findMany();
            }
            
            res.json({listed: listUsers ?  listUsers : 'User not found'});
        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const { name, email, password } = req.body;

            const userEmail = await prisma.users.findUnique({where: {email}});
            if (userEmail) return res.json({alert: "Email already used"});

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
            
            if (!user) return res.json({alert: "User not found"});
            if (!confirmPassword) return res.json({alert: "Please confirm your password"});
            
            const checkPassword = await bcrypt.compare(confirmPassword, user.password);
            if (checkPassword) {
                const passwordHash = await bcrypt.hash(password, 10);          
                const updateUsers = await prisma.users.update({
                    where: {id: Number(id)}, 
                    data: {name, email, password: passwordHash}
                });
                return res.json({updated: updateUsers});
            } else {
                res.json({alert: "Incorrect password"});   
            }
        } catch (error) {
            if (error.code == "P2002") return res.json({alert: "Email already used"});
            if (error.code == "P2025") return res.json({alert: "User not found"});
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const { password } = req.body;
            const user = await prisma.users.findUnique({where: {id: Number(id)}});

            if(!user) return res.json({alert: 'User not found'});
            if(!password) return res.json({alert: 'Please confirm your password'});

            const checkPassword = await bcrypt.compare(password, user.password);
            if (checkPassword) {
                const deleteUsers = await prisma.users.delete({where: {id: Number(id)}});
                return res.json({deleted: deleteUsers});
            } else {
                res.json({alert: 'Incorrect password'});
            }            
        } catch (error) {
            next(error);
        }
    }
}