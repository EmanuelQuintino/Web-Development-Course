module.exports = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        if (!authToken) return res.status(400).json({alert: 'Please inform token'});
        
        const token = authToken.split(' ');
        if (token.length != 2) return res.status(401).json({alert: 'Unauthorized token'});
        if (!/^Bearer$/i.test(token[0])) return res.status(401).json({alert: 'Unauthorized token'});
        
        const jwt = require('jsonwebtoken');
        const { secret } = require('../config/auth.json');
        jwt.verify(token[1], secret, (error, decoded) => {
            if (error) return res.status(401).json({error: error.message});
            console.log("Decoded:", decoded);    
            return next();
        });
    } catch (error) {
        return res.json({error: error.message});
    }   
}