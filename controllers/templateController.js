const express = require('express')

const router = express.Router()
const Templates = require('../models/template')

router.get('/', (req, res)=>{
    Templates.find({}).then((templates)=>{
        res.status(200).json(templates)
    })
})


module.exports = router