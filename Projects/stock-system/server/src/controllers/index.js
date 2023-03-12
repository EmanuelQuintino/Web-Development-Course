const prisma = require('../database');

module.exports = {
    async read(req, res) {
        try {
            const { id } = req.query;
            if (id) {
                const listProduct = await prisma.products.findUnique({where: {id: Number(id)}});
                if (!listProduct) return res.status(400).json("Produto não encontrado");
                return res.json(listProduct);
            } else {
                const listProducts = await prisma.products.findMany();
                return res.json(listProducts);
            }
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res) {
        try {
            const {name, description, price, expires_in, link_image} = req.body;
            if (!name || !description || !price || !expires_in || !link_image || 
                name == "" || description == "" || price == "" || expires_in == "" || link_image == "") {
                return res.status(400).json("Por favor informar todos os campos");
            }
            await prisma.products.create({
                data: {name, description, price: Number(price), expires_in: new Date(expires_in), link_image}
            });
            return res.json("Produto cadastrado com sucesso");
        } catch (error) {
            console.error(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const {name, description, price, expires_in, link_image} = req.body;

            if (!name || !description || !price || !expires_in || !link_image || 
                name == "" || description == "" || price == "" || expires_in == "" || link_image == "") {
                return res.status(400).json("Por favor informar todos os campos");
            }

            const listProduct = await prisma.products.findUnique({where: {id: Number(id)}});
            if (!listProduct) return res.status(400).json("Produto não encontrado");
            
            await prisma.products.update({
                data: {name, description, price: Number(price), expires_in: new Date(expires_in), link_image},
                where: {id: Number(id)}
            });
            return res.json("Produto atualizado com sucesso");
        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const listProduct = await prisma.products.findUnique({where: {id: Number(id)}});
            if (!listProduct) return res.status(400).json("Produto não encontrado");

            await prisma.products.delete({where: {id: Number(id)}});
            return res.json("Produto deletado com sucesso");
        } catch (error) {
            console.error(error);
        }
    }
}