const express = require('express')

const router = express.Router()
const Tempaltes = require('../models/template')



router.get('/', (req, res)=>{
    Tempaltes.find({}).then((templates)=>{
        res.status(200).json(templates)
    })
})


module.exports = router