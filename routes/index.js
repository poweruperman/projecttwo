module.exports = app => {
    require('../routes/pokedexRoutes.js')(app)
    require('../routes/userRoutes.js')(app)
    require('../routes/joinRoutes.js')(app)
}