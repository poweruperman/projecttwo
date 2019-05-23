const Sequelize = require('sequelize')
const sequelize = require('../config')

module.exports = {
    Pokedex: require('./Pokedex.js'),
    PokedexSel: require('./PokedexSel.js')
}