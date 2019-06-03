const Sequelize = require('sequelize')
const connection = require('../config')

class Pokemon extends Sequelize.Model {}
Pokemon.init({
 
 pokemon_name: {
     type: Sequelize.STRING,
     allowNull: false
   },
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
 isBaby: Sequelize.BOOLEAN,
 canEvolve: Sequelize.BOOLEAN
}, {
     sequelize: connection,
     modelName: 'pokemon'
 })


    
module.exports = Pokemon