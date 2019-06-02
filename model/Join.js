const Sequelize = require('sequelize')
const connection = require('../config')

class Join extends Sequelize.Model { }
Join.init({
  user_id: Sequelize.STRING,
  user_name: Sequelize.STRING,
  pokemon_nickname: Sequelize.STRING,
  hunger: Sequelize.INTEGER,
  hungerT: Sequelize.DATE,
  exhaust: Sequelize.INTEGER,
  exhaustT: Sequelize.DATE,
  boredom: Sequelize.INTEGER,
  boredomT: Sequelize.DATE,
  affection: Sequelize.INTEGER,
  affectionT: Sequelize.DATE,
  anger: Sequelize.INTEGER,
  angerT: Sequelize.DATE,
  sadness: Sequelize.INTEGER,
  sadnessT: Sequelize.DATE,
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
    modelName: 'join'
  })



module.exports = Join