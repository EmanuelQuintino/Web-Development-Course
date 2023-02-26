const prisma = require('../database');

module.exports = {
    async read(req, res) {
        try {
            const listProducts = await prisma.products.findMany();
            return res.send(listProducts);
        } catch (error) {
            return res.send(error.message);
        }
    },

    async create(req, res) {
        try {
            const { description, category, price_unit, quantity, expiration_date } = req.body;
            const registerProduct = await prisma.products.create({ 
                data: { 
                    description, 
                    category, 
                    price_unit: Number(price_unit), 
                    quantity: Number(quantity), 
                    expiration_date: new Date(expiration_date)
                    }
            });
            return res.status(201).send(`Produto (id: ${registerProduct.id}) cadastrado com sucesso!`);
        } catch (error) {
            return res.send(error.message);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { description, category, price_unit, quantity, expiration_date } = req.body;
            await prisma.products.update({
                where: { id: Number(id) },
                data: { 
                    description, 
                    category, 
                    price_unit: Number(price_unit), 
                    quantity: Number(quantity), 
                    expiration_date: new Date(expiration_date)
                }
            });
            return res.send(`Produto (id: ${id}) atualizado com sucesso!`);
        } catch (error) {
            return res.send(error.message);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await prisma.products.delete({where: {id: Number(id)}});
            return res.send(`Produto (id: ${id}) deletado com sucesso!`);
        } catch (error) {
            return res.send(error.message);
        }
    }
}