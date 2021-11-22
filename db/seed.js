const Template = require("../models/template");
const madLibsData = require("./madLibsData.json");
const User = require('../models/user');
const userData = require('./userData.json')

Template.deleteMany({}).then(()=>{
    Template.insertMany(madLibsData, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Templates Added!')
        }
        process.exit()
    })
}).catch(err => console.log(err))

User.deleteMany().then(() => {
    User.insertMany(userData, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('User Data Added!')
        }
        process.exit()
    })
}).catch(err => console.log(err))

// const setUp = async () => {
//   try {
//     await Template.deleteMany();
//     await Template.insertMany(templateData);
//     process.exit();
//   } catch (err) {
//     console.log(err);
//   }
// };
// setUp();
