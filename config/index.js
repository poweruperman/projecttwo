const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(`mysql://root:Abigdog1!@localhost:3306/pokedex_db`)
    
}

module.exports = sequelize
