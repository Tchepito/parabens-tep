module.exports=(app)=>{
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
    //validar o usurio e senha
    app.post('/login',async(req,res)=>{
        //recuperar as informações digitadas no formulario
        var dados=req.body
        //conectar com o banco de dados
        var database=require('../config/database')()
        //selecionar a model usuarios 
        var usuarios=require('../models/usuarios')
        //verificar se po emial esta acdastrado 
        var verificar=await usuarios.findOne({email:dados.email})
        if(!verificar){
            return res.send("Email não esta cadastrado!")
        } 
        var cript=require('bcryptjs')
        var comparar=await cript.compare(dados.senha,varificar.senha)
        if(!comparar)
            return res.render("atividades.ejs")
        }
    )
}