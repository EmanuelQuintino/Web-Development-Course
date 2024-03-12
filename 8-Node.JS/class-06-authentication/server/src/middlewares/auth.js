const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth');

module.exports = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) return res.status(400).json({alert: 'Please inform your token'});
        
        const token = bearerToken.split(' ');
        if (token.length != 2) return res.status(401).json('Unauthorized token');
        if (!/^Bearer$/i.test(token[0])) return res.status(401).json('Unauthorized token');

        jwt.verify(token[1], secret, (error, decoded) => {
            if (error) return res.json(error.message);
            req.userID = decoded.id;
            return next();
        });        
    } catch (error) {
        return console.error(error.message);
    }
}