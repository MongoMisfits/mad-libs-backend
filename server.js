require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const templateController = require('./controllers/templateController')
app.use('/templates', templateController)

app.get('/', (req,res)=>{
    res.send('This is the backend')
})

app.listen(PORT, ()=>{
    console.log(`We running on Port: ${PORT}` )
})

