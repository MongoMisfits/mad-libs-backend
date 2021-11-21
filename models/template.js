const mongoose = require('../db/connection')

const templateSchema = new mongoose.Schema({
    title: String,
    blanks: Array,
    value: Array
})

module.exports = mongoose.model('Template', templateSchema)