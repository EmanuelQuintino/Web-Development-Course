const prisma = require('../databases');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            
            if (id) {
                const listCourse = await prisma.courses.findUnique({where: {id: Number(id)}});
                res.json(listCourse);
            } else {
                const listCourses = await prisma.courses.findMany();
                res.json(listCourses);
            }
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async create(req, res) {
        try {
            const { name, hours } = req.body;
            const createCourse = await prisma.courses.create({data: {name, hours}});
            res.json({create: createCourse});
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, hours } = req.body;
            const updatecourse = await prisma.courses.update({
                data: {name, hours},
                where: {id: Number(id)}
            });
            res.json({update: updatecourse});
        } catch (error) {
            res.json({error: error.message});
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletecourse = await prisma.courses.delete({where: {id: Number(id)}});
            res.json({delete: deletecourse});
        } catch (error) {
            res.json({error: error.message});
        }
    }
}