const buscar = require('../routes/atividades')

module.exports = (app)=>{

    app.get('/login',(req,res)=>{

        res.render('login.ejs')

    })

    app.post('/login', async(req,res)=>{
        var dados = req.body
        var database = require('../config/database')()
        var usuarios = require('../models/usuarios')
        var verificar = await usuarios.findOne({email:dados.email})
        if(!verificar){
        return res.send("invalid email")
        }
        var cript = require('bcryptjs')
        var comparar = await cript.compare(dados.senha,verificar.senha)
        if(!comparar){
            return res.send("invalid password")
        }
//buscar atividades do usuario 
            const atividades = require("../models/atividades")
            var buscar = await atividades.find({usuario:verificar._id})
            res.render('atividades.ejs', {lista:buscar, nome:verificar.nome, id:verificar._id})

        })   
    }  
