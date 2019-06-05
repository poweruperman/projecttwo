const express = require('express')
const app = express()
const { join } = require('path')
const PORT = process.env.PORT || 3003
require("dotenv").config()

app.use(express.static(join(__dirname, 'pokedex', 'build')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/pokedex/build/index.html'))
  })
  
require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(PORT, () => console.log(`PORT number is : ${PORT}`)))
    .catch(e => console.log(e))