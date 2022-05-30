module.exports = (app)=>{
    app.post('/atividades', async(req,res)=>{
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
            usuarios:dados.id
        }).save()
        //recarregar a página de atividades 
        res.render('atividades.ejs',{nome:dados.nome, id:dados.id})
    })
}