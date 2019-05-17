const Sequelize = require('sequelize')

module.exports  = new Sequelize('mysql://root:(PW)@localhost:3306/pokedex_db')