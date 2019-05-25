const Sequelize = require('sequelize')
const connection = require('../config')

class Join extends Sequelize.Model { }

Join.init({
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
    sadnessT:Sequelize.INTEGER

}, {
        sequelize: connection,
        modelName: 'join'
    })


    

module.exports = Join
