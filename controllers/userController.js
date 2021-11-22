const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', (req, res)=>{
    User.find({}).then((user)=>{
        res.status(200).json(user)
    })
})

module.exports = router