module.exports = {
    async create(req, res) {
        const { id, name } = req.body;
        res.json({id, name});
    },

    async read(req, res){ 
        res.send({situation: 'Listar usuários'});
    },

    async update(req, res) {
        const { id } = req.params;
        res.json({situation: `User ${id} atualizado`});
    },
    
    async delete(req, res) {
        const { id } = req.params;
        res.json({situation: `User ${id} deletado`});
    },
}