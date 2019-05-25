const express = require('express')
const app = express()
const { join } = require('path')
const PORT = process.env.PORT || 3000
require('dotenv').config()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(PORT, () => console.log(`PORT number is : ${PORT}`)))
    .catch(e => console.log(e))