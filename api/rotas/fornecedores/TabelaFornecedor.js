const modelo = require('./ModeloTabelaFornecedor')
module.exports = {
    listar() {
        return modelo.findAll()
    },
    inserir(fornecedor) {
        return modelo.create(fornecedor)
    },
    async buscarPorId(id) {
        const encontrado = await modelo.findOne({where: {
            id: id
        }})
        if(!encontrado) {
            throw new Error('Fornecedor não encontrado')
        }

        return encontrado
    }
}