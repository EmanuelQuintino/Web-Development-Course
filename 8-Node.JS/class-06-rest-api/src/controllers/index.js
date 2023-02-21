const prisma = require('../databases');
const bcrypt = require('bcrypt');

module.exports = {
    async read(req, res, next) {
        try {
            const { id } = req.query;
            
            if (id) {
                const listStudant = await prisma.studants.findUnique({where: {id: Number(id)}});
                return listStudant ? 
                    res.json({listed: listStudant}) : 
                    res.status(400).json({alert: 'Studant not found'});
            } else {
                const listStudants = await prisma.studants.findMany();
                return res.json({listed: listStudants});
            }
        } catch (error) {
            if (error.code == "P2021") return res.status(500).json({alert: "Table not found"});
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const { name, email, password } = req.body;

            const StudantsEmail = await prisma.studants.findUnique({where: {email}});
            if (StudantsEmail) return res.status(400).json({alert: "Email already used"});

            const passwordHash = await bcrypt.hash(password, 10);

            const createStudants = await prisma.studants.create({
                data: {name, email, password: passwordHash}
            });
            return res.json({created: createStudants});
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, email, password, confirmPassword } = req.body;
            const studant = await prisma.studants.findUnique({where: {id: Number(id)}});
            
            if (!studant) return res.status(400).json({alert: "Studant not found"});
            if (!confirmPassword) return res.status(400).json({alert: "Please confirm your password"});
            
            const checkPassword = await bcrypt.compare(confirmPassword, studant.password);
            if (checkPassword) {
                const passwordHash = await bcrypt.hash(password, 10);          
                const updateStudant = await prisma.studants.update({
                    where: {id: Number(id)}, 
                    data: {name, email, password: passwordHash}
                });
                return res.json({updated: updateStudant});
            } else {
                return res.status(401).json({alert: "Incorrect password"});   
            }
        } catch (error) {
            if (error.code == "P2002") return res.status(400).json({alert: "Email already used"});
            if (error.code == "P2025") return res.status(400).json({alert: "Studant not found"});
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const { password } = req.body;
            const studant = await prisma.studants.findUnique({where: {id: Number(id)}});

            if(!studant) return res.status(400).json({alert: 'Studant not found'});
            if(!password) return res.status(400).json({alert: 'Please confirm your password'});

            const checkPassword = await bcrypt.compare(password, studant.password);
            if (checkPassword) {
                const deleteStudant = await prisma.studants.delete({where: {id: Number(id)}});
                return res.json({deleted: deleteStudant});
            } else {
                return res.status(401).json({alert: 'Incorrect password'});
            }            
        } catch (error) {
            next(error);
        }
    }
}