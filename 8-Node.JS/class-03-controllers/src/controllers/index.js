module.exports = {
    create(req, res) {
        const { id, name } = req.body;
        res.json({id, name});
    },

    read(req, res){ 
        res.send({situation: 'Listar usuários'});
    },

    update(req, res) {
        const { id } = req.params;
        res.json({situation: `User ${id} atualizado`});
    },
    
    delete(req, res) {
        const { id } = req.params;
        res.json({situation: `User ${id} deletado`});
    },
}