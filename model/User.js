const Sequelize = require('sequelize')
const connection = require('../config')

class User extends Sequelize.Model { }

User.init({
    identifier: Sequelize.STRING,
    // created: Sequelize.INTEGER,     //Make sure to delete if not used later
    // signed_in: Sequelize.INTEGER,
    user_id:Sequelize.STRING

}, {
        sequelize: connection,
        modelName: 'user'
    })


    
module.exports = User
