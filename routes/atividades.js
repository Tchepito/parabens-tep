module.exports = (app)=>{
    app.post('/atividades', async(req, res)=>{
        var dados = req.body
        //return console.log(dados)
        //conectar com o database
        const database = require("../config/database")()
        //importar o model atividades 
        const atividades = require("../models/atividades")
        //gravar informações do formulario no database
        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            disciplinas:dados.disciplinas,
            instrucoes:dados.orientacoes,
            usuarios:dados.id,
            titulo:dados.titulo
        }).save()
        
        //recarregar a página de atividades 
        res.redirect('/atividades?id='+dados.id)
    })
    app.get('/atividades', async(req,res)=>{
        var user = req.query.id
        var usuarios = require('../models/usuarios')
        var atividades = require('../models/atividades')

        var dadosUser = await usuarios.findOne({_id:user})
        var dadosAtividades = await atividades.find(
        {usuarios:user})
            
        res.render('atividades.ejs',{nome:dadosUser.nome, id:dadosUser._id, lista:dadosAtividades})
    })
}