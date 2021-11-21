const Templates = require('../models/template')
const templateData = require('./seedData.json')

Templates.deleteMany({}).then(()=>{
    Templates.insertMany(templateData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Templates Added!')
        }
        process.exit()
    })
})

