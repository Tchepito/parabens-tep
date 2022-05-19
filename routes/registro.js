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
    var usuarios=require('../models/usuarios')()
    //gravar o dcoumento
    var dcoumento =await new usuarios({
        nome:dados.nome,
        email:dados.dados,  
        senha:dados.senha
    }).save()
    res.redirect('/login')
    })
}