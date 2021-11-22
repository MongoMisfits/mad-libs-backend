const mongoose = require('mongoose')
mongoose.Promise = Promise

let mongoURI = ''
if(process.env.MONGODB_URI){
    mongoURI = process.env.MONGODB_URI
}else{
    mongoURI = 'mongodb://localhost/madlibs-templates'
}

mongoose.connect(mongoURI, {useNewUrlParser: true})
 .then(instance => {
     console.log(`Connected to db: ${instance.connections[0].name}`)
 }).catch(error => {
     console.log("Connetion failed", error)
 })

module.exports = mongoose

