module.exports=(app)=>{
    //abrir o arquivo registro.ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
    //garvar ad infotmações digitados no mongoATlas
    app.post('/registro',async(req,res)=>{
    //recuperar as dinfotmações digtados
    var dados= req.body
//importar aas configurações
    var database=require('../config/database')
    //definir em qual coleção vamo gravar 
    var usuarios=require('../models/usuarios')
    //verificar se o email ja esta cadastrado
    var verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
            return res.send('Email ja cadastrado')
        }
        //criptografar a senha
        var cript = require("bcryptjs")
        var senhasegura = await cript.hash(dados.senha,10)

    //gravar o dcoumento
    var dcoumento =await new usuarios({
        nome:dados.nome,
        email:dados.dados,  
        senha:senhasegura
    }).save()
    res.redirect('/login')
    })
}