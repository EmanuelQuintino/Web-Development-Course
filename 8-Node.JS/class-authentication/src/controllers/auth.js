const prisma = require("../databases");
const bcrypt = require('bcrypt');

module.exports = {
    async auth(req, res) {
        try {
            const {email, password } = req.body;
            if (!email) return res.status(400).json({alert: 'Please inform E-mail'});
            if (!password) return res.status(400).json({alert: 'Please inform Password'});
            
            const user = await prisma.users.findUnique({where: {email}});
            if (!user) return res.status(400).json({alert: 'E-mail or password invalid'});
            
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) return res.status(400).json({alert: 'E-mail or password invalid'});
            
            return res.json({login: user});
        } catch (error) {
            return res.json({error: error.message});
        }
    }
}