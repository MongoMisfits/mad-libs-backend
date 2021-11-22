const Template = require("../models/template")
const templateData = require('./seedData.json')

Template.deleteMany().then(()=>{
    console.log('deleted items')
    Template.insertMany(templateData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Templates Added!')
        }
    })
    process.exit()
}).catch(err=> console.log(err))

