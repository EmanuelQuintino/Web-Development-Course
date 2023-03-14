const prisma = require('../databases');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/auth');

module.exports = {
    async auth(req, res) {
        try {
            const {email, password} = req.body;
            if (!email) return res.status(400).json('Email is required');
            if (!password) return res.status(400).json('Password is required');

            const user = await prisma.users.findUnique({where: {email}});
            if (!user) return res.status(401).json('Email or Password incorrect');

            const passwordCheck = await bcrypt.compare(password, user.password);
            if(!passwordCheck) return res.status(401).json('Email or Password incorrect');

            const token = jwt.sign({id: String(user.id)}, secret, {expiresIn});
            return res.json({id: user.id, status: "Authenticated", token});
        } catch (error) {
            return console.error(error.message);
        }
    }
}