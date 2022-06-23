const mongoose = require('mongoose')

const conn = async()=>{
    var atlas = await mongoose.connect('mongodb+srv://tept:teptrei@cluster0.3o59kiz.mongodb.net/todo_list')
}
module.exports = conn
