const ModeloTable = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTable
    .sync()
    .then( () => console.log('Tabela criada com sucesso'))
    .catch(_ => console.log)