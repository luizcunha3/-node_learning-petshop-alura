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

roteador.get('/:id', async (req, res) => {
    try {
        const idFornecedor = req.params.id
        const fornecedor = new Fornecedor({ id: idFornecedor })
        console.log(fornecedor)
        await fornecedor.carregar()
        res.status(200).send(fornecedor)
    } catch(err) {
        res.send({mensagem: err.message})
    }
})

roteador.patch('/:id', async (req, res) => {
    try {
        const idFornecedor = req.params.id
        const dadosRecebidos = req.body
       
        const dados = {id: idFornecedor, ...dadosRecebidos}
        const fornecedor = new Fornecedor(dados)
       
        await fornecedor.atualizar()
        res.end()
    } catch(err) {
        res.send({mensagem: err.message})
    }
})

roteador.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const fornecedor = new Fornecedor({id})
        console.log(fornecedor)
        await fornecedor.carregar()
        console.log(fornecedor)
        await fornecedor.remover()
        res.end()
        
    } catch (err) {
        res.send(err)
    }
})

module.exports = roteador