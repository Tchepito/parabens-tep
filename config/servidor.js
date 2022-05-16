const express = require("express")

const app = express()

const porta = process.env.PORT || 3030 

app.use(express.static('assets'))


module.exports = {app, porta}