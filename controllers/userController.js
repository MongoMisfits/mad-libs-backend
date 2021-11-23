const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', (req, res)=>{
    User.find({}).then((user)=>{
        res.status(200).json(user)
    })
})

router.post('/', (req, res) => {
    User.create(req.body).then(() => {
        User.find().then((all) => {
            res.status(201).json(all)
        })
    })
})

module.exports = router