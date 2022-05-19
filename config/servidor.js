//importar o pacote express
const express = require("express")
//executar o express
const app = express()
//definir a porta do servidor
const porta = process.env.PORT || 3030 

//definir a pasta de css e images
app.use(express.static('assets'))
//desfinir o express com o body parse
app.use(express.urlencoded({extended:false}))

//exporta app e porta
module.exports = {app, porta}