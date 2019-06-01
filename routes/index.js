module.exports = app => {
    require('./pokedexRoutes.js')(app)
    require('./userRoutes.js')(app)
    require('./joinRoutes.js')(app)
}