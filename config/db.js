const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://0.0.0.0/Bookapp').then(()=>{
    console.log('connected to database');
}).catch(()=>{
    console.log('error connecting to database');
})

module.exports = db;