const mongoose = require('../db/connection')

const templateSchema = new mongoose.Schema({
    title: String,
    blanks: Array,
    value: Array
})

const Template = mongoose.model('Template', templateSchema)
module.exports = Template