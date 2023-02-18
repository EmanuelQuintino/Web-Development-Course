const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;

module.exports = {
    async read(req, res) {
        const posts = await prisma.post.findMany();
        res.json({posts});
        // res.json({test: 'Controllers'});
    }
}