const Sequelize = require('sequelize')
const connection = require('../config')

class Join extends Sequelize.Model { }

Join.init({
    userId:Sequelize.INTEGER,
    pokemonId:Sequelize.INTEGER,
    hunger: Sequelize.INTEGER,
    hungerT:Sequelize.INTEGER,
    exhaust: Sequelize.INTEGER,
    exhaustT:Sequelize.INTEGER,
    boredom: Sequelize.INTEGER,
    boredomT:Sequelize.INTEGER,
    affection: Sequelize.INTEGER,
    affectionT:Sequelize.INTEGER,
    anger: Sequelize.INTEGER,
    angerT:Sequelize.INTEGER,
    sadness: Sequelize.INTEGER,
    sadnessT:Sequelize.INTEGER,
    name: { type: Sequelize.STRING, field: 'name' },
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
        modelName: 'join'
    })



    

module.exports = Join
