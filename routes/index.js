module.exports = app => {
    require ('../routes/pokedexRoutes.js')(app)
    require ('./pokedexSelRoutes.js')(app)
}