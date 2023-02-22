const { join } = require("@prisma/client/runtime");
const prisma = require("../databases");

module.exports = {
    async auth(req, res) {
        try {
            const {email, password } = req.body;
            if (!email) return res.json({alert: 'Please inform E-mail'});
            if (!password) return res.json({alert: 'Please inform Password'});
            
            const user = await prisma.users.findUnique({where: {email}});
            if (!user) return res.json({alert: 'User not found'});

            return res.json({alert: 'Auth'});
        } catch (error) {
            return res.json({error: error.message});
        }
    }
}