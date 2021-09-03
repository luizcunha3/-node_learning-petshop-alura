const express = require('express')
const config = require('config')
const app = express()

app.use(express.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

const port = config.get('api.port')
app.listen(port, () => {
    console.log(`A api esta funcionando na porta ${port}`)
})