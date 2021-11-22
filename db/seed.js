
const Template = require("../models/template")
const templateData = require('./seedData.json')

Template.deleteMany({}).then(()=>{
    Template.insertMany(templateData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Templates Added!')
        }
        process.exit()
    })
})