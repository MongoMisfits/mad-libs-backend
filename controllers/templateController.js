const express = require('express')
const Template = require('../models/template')

const router = express.Router()
const Templates = require('../models/template')

router.get('/', (req, res)=>{
    Templates.find({}).then((templates)=>{
        res.status(200).json(templates)
    })
})

router.post('/', (req, res) => {
    Templates.create(req.body).then(() => {
        Templates.find().then((templates) => {
            res.status(201).json(templates)
        })
    })
})

router.delete('/:id', (req,res) => {
    Templates.findByIdAndDelete(req.params.id).then(() => {
        Templates.find().then((templates) => {
            res.json(templates)
        })
    })
})

router.put('/:id', (req, res) => {
    Templates.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Templates.find().then((template) => {
            res.status(200).json(template)
        })
    })
})


module.exports = router