// //code before:

// const Sequelize = require('sequelize')
// const connection = require('../config')

// class Join extends Sequelize.Model { }

// Join.init({
//     hunger: Sequelize.INTEGER,
//     hungerT:Sequelize.INTEGER,
//     exhaust: Sequelize.INTEGER,
//     exhaustT:Sequelize.INTEGER,
//     boredom: Sequelize.INTEGER,
//     boredomT:Sequelize.INTEGER,
//     affection: Sequelize.INTEGER,
//     affectionT:Sequelize.INTEGER,
//     anger: Sequelize.INTEGER,
//     angerT:Sequelize.INTEGER,
//     sadness: Sequelize.INTEGER,
//     sadnessT:Sequelize.INTEGER

// }, {
//         sequelize: connection,
//         modelName: 'join'
//     })




// module.exports = Join


//code after:

// const Pokemon = require('./Pokemon')
// const User = require('./User')

module.exports = (Sequelize, config) => {
    // let User = require('./User.js')(Sequelize, config)
    // let Pokemon = require('./Pokemon.js')(Sequelize, config)

    class UserPokemon extends Sequelize.Model { }
    UserPokemon.init({

        // hunger: Sequelize.INTEGER,
        // hungerT:Sequelize.INTEGER,
        // exhaust: Sequelize.INTEGER,
        // exhaustT:Sequelize.INTEGER,
        // boredom: Sequelize.INTEGER,
        // boredomT:Sequelize.INTEGER,
        // affection: Sequelize.INTEGER,
        // affectionT:Sequelize.INTEGER,
        // anger: Sequelize.INTEGER,
        // angerT:Sequelize.INTEGER,
        // sadness: Sequelize.INTEGER,
        // sadnessT:Sequelize.INTEGER,
        // name: Sequelize.STRING,
        // front_img: Sequelize.STRING,
        // back_img: Sequelize.STRING,
        // type_1: Sequelize.STRING,
        // type_2: Sequelize.STRING,
        hp: Sequelize.INTEGER
        // attack: Sequelize.INTEGER,
        // defense: Sequelize.INTEGER,
        // sp_attack: Sequelize.INTEGER,
        // sp_defense: Sequelize.INTEGER,
        // speed: Sequelize.INTEGER,
        // background: Sequelize.STRING,
        // isBaby: Sequelize.Boolean,
        // canEvolve: Sequelize.Boolean

    }, {
            sequelize: config,
            modelName: 'userpokemon'
        }
    )
    //    UserPokemon.belongsTo(Pokemon)
    //    UserPokemon.belongsTo(User)

    return UserPokemon
} 