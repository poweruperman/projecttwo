const Sequelize = require('sequelize')
const connection = require('../config')

class Pokemon extends Sequelize.Model { }

Pokemon.init({
    name: Sequelize.STRING,
    front_img: Sequelize.STRING,
    back_img: Sequelize.STRING,
    type_1: Sequelize.STRING,
    type_2: Sequelize.STRING,
    hp: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    sp_attack: Sequelize.INTEGER,
    sp_defense: Sequelize.INTEGER,
    speed: Sequelize.INTEGER,
    background: Sequelize.STRING,
}, {
        sequelize: connection,
        modelName: 'pokemon'
    })

module.exports = Pokemon
