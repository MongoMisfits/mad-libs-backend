const mongoose = require('mongoose')
mongoose.Promise = Promise
const MONGO_PASS = process.env.MONGO_PASS

let mongoURI = ''
if(process.env.MONGODB_URI){
    mongoURI = process.env.MONGODB_URI
}else{
    mongoURI = 'mongodb://localhost/madlibs-templates'
}
mongoose.connect(mongoURI, { useNewUrlParser: true}, ()=>{
    console.log('Successfully connected to MongoDb')
})

module.exports = mongoose

