const Pokedex = require('./Pokedex')
const User = require('./User')
const Join = require('./Join')

User.hasMany(Join)
Join.belongsTo(User)
Join.belongsTo(Pokedex)
User.belongsToMany( Pokedex, {through: Join, foreignKey: 'userId' })

module.exports = { Pokedex,User,Join}