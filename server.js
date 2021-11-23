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

const userController = require('./controllers/userController')
app.use('/users', userController)

app.get('/', (req,res)=>{
    res.send('This is the backend')
})

app.set('port', PORT)
app.listen(app.get('port'), () => console.log(`PORT: ${app.get("port")} 🌟`))

