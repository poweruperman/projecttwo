const express = require('express')
const app = express()
const { join } = require('path')
const PORT = process.env.PORT || 3001
require("dotenv").config()

app.use(express.static(join(__dirname, 'pokedex', 'build')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

require('./routes')(app)

require('./config').sync({force: true})
    .then(_ => app.listen(PORT, () => console.log(`PORT number is : ${PORT}`)))
    .catch(e => console.log(e))