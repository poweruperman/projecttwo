module.exports = app => {
    require('./pokedexRoute.js')(app)
    require('./pokedexSelRoute.js')(app)
}