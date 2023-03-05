const prisma = require('../databases');

module.exports = {
    async read(req, res, next) {
        try {
            const listStudents = await prisma.students.findMany();
            return res.json(listStudents);
        } catch (error) {
            if (error.code == "P2021") return res.status(500).json("Tabela não encontrada");
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const { name, email, cpf, birth, phone, gender, cep, number, street, district, city, state, uf } = req.body;
            const studentEmail = await prisma.students.findUnique({where: {email}});
            if (studentEmail) return res.status(400).json("Email já cadastrado");

            const studentCPF = await prisma.students.findUnique({where: {cpf}});
            if (studentCPF) return res.status(400).json("CPF já cadastrado");

            await prisma.students.create({
                data: {name, email, cpf, birth: new Date(birth), phone, gender, cep, number, street, district, city, state, uf}
            });
            return res.json(`Aluno cadastrado com sucesso`);
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, email, cpf, birth, phone, gender, cep, number, street, district, city, state, uf } = req.body;
            
            const student = await prisma.students.findUnique({where: {id: Number(id)}});
            if (!student) return res.status(400).json("Estudante não encontrado");

            const studentEmail = await prisma.students.findUnique({where: {email}});
            if (studentEmail && (studentEmail.email != student.email)) {
                return res.status(400).json("Email já cadastrado");
            }
            
            const studentCPF = await prisma.students.findUnique({where: {cpf}});
            if (studentCPF && (studentCPF.cpf != student.cpf)) {
                return res.status(400).json("CPF já cadastrado");
            }

            await prisma.students.update({
                where: {id: Number(id)}, 
                data: { name, email, cpf, birth: new Date(birth), phone, gender, cep, number, street, district, city, state, uf }
            });
            return res.json(`Estudante atualizado com sucesso`);
        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const student = await prisma.students.findUnique({where: {id: Number(id)}});
            if(!student) return res.status(400).json('Estudante não encontrado');

            const deleteStudent = await prisma.students.delete({where: {id: Number(id)}});
            return res.json(`Estudante deletado com sucesso`);            
        } catch (error) {
            next(error);
        }
    }
}