// O arquivo loader será chamado quando a aplicação for carregada 

const server = require('./config/server')

// Referencia do arquivo do banco de dados

require('./config/database')

// configuração dos Routes
// será necessario também passar a referencia do server
require('./config/routes')(server)

const cors = require('cors')

server.use(cors())