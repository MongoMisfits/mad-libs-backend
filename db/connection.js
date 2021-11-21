const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/madlibs-templates', { useNewUrlParser: true}, ()=>{
    console.log('Successfully connected to MongoDb')
})

module.exports = mongoose

