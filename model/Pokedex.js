// CODE BEFORE:

const Sequelize = require('sequelize')
const connection = require('../config')

class Pokedex extends Sequelize.Model { }

Pokedex.init({
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
        modelName: 'Pokemon'
    })


module.exports = Pokedex


//CODE NOW:

// module.exports = (Sequelize, config) => {
//     class Pokemon extends Sequelize.Model {}
//    Pokemon.init({
//     name1: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//     front_img: Sequelize.STRING,
//     back_img: Sequelize.STRING,
//     type_1: Sequelize.STRING,
//     type_2: Sequelize.STRING,
//     hp: Sequelize.INTEGER,
//     attack: Sequelize.INTEGER,
//     defense: Sequelize.INTEGER,
//     sp_attack: Sequelize.INTEGER,
//     sp_defense: Sequelize.INTEGER,
//     speed: Sequelize.INTEGER,
//     background: Sequelize.STRING,
//     isBaby: Sequelize.BOOLEAN
// }, {
//         sequelize: config,
//         modelName: 'pokemon'
//     })

//     return Pokemon
//   }