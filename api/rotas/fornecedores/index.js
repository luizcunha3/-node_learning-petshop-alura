const roteador = require('express').Router()
const tabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (req, res) => {
    const resultados = await tabelaFornecedor.listar()
    res.send(JSON.stringify(resultados))
})

roteador.post('/', (req, res) => {
    const dadosRecebidos = req.body
    const fornecedor = new Fornecedor(dadosRecebidos)

    fornecedor.criar()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err)
    })

    res.send(JSON.stringify(fornecedor))
})

roteador.get('/:id', (req, res) => {
    const idFornecedor = req.params.id
    const fornecedor = new Fornecedor({ id })
    fornecedor
})
module.exports = roteador