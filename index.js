require('dotenv').config(); //Habilita variáveis de Ambiente
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');

const servico = require('./src/routes/servico.route');

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    .use("/funcionarios/", servico);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});