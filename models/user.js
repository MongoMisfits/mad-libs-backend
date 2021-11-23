const mongoose = require('../db/connection')
const Template = require('./template')
const templateSchema = mongoose.model('Template').schema

const userSchema = new mongoose.Schema({
    user: String,
    template: [templateSchema]
})

const User = mongoose.model('User', userSchema)
module.exports = User