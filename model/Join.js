const Sequelize = require('sequelize')
const connection = require('../config')

class Join extends Sequelize.Model { }

Join.init({
    userId:Sequelize.INTEGER,
    pokemonId:Sequelize.INTEGER,
    hunger: Sequelize.INTEGER,
    hungerT:Sequelize.DATE,
    exhaust: Sequelize.INTEGER,
    exhaustT:Sequelize.DATE,
    boredom: Sequelize.INTEGER,
    boredomT:Sequelize.DATE,
    affection: Sequelize.INTEGER,
    affectionT:Sequelize.DATE,
    anger: Sequelize.INTEGER,
    angerT:Sequelize.DATE,
    sadness: Sequelize.INTEGER,
    sadnessT:Sequelize.DATE,
    name: { type: Sequelize.STRING, field: 'name' },
    nickname : Sequelize.STRING,
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
