const { PokedexSel } = require('../model')


module.exports = app => {
    app.get('/pokedexsel', (req, res) => {
        PokedexSel.findAll()
        .then(pokedexsel => res.json(pokedexsel))
        .catch(e => console.log(e))
    })

    app.get('/pokedexsel/:id', (req, res) => {
        PokedexSel.findOne({ where: {id: req.params.id}})
        .then(pokedexsel => res.json(pokedexsel))
        .catch(e => console.log(e))
    })

    app.post('/pokedexsel', (req, res) => {
        PokedexSel.create(req.body)
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.put('/pokedexsel/:id', (req, res) => {
        PokedexSel.update(req.body, { where: { id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.delete('/pokedexsel/:id', (req, res) => {
        PokedexSel.destroy({ where: {id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })
}