const Sequelize = require('sequelize')
const connection = require('../config')

class User extends Sequelize.Model { }

User.init({
    identifier: Sequelize.STRING,
    user_id:Sequelize.STRING

}, {
        sequelize: connection,
        modelName: 'user'
    })


    
module.exports = User
