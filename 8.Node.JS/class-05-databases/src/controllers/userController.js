const database = require('../database');
module.exports = {
    async index(req, res) {
        // try {
            const result = await database('users'); 
            return res.json(result);
        // } catch (error) {
            // console.error(error);
        // }
    }
}