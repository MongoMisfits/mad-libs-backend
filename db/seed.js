
const Template = require("../models/template")
const templateData = require('./seedData.json')

// Template.deleteMany({}).then(()=>{
//     Template.insertMany(templateData, (err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('Templates Added!')
//         }
//         process.exit()
//     })
// }).catch(err => console.log(err))

const setUp = async ()=>{
    await Template.deleteMany();
    await Template.insertMany(templateData)
    process.exit()
}
setUp()