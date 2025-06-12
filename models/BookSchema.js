const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password:String
},{timestamps:true})

const BookModel = mongoose.model('BookApp',BookSchema)
module.exports = BookModel;