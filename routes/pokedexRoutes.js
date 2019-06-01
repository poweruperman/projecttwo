const { Pokedex } = require('../model')


module.exports = app => {
    app.get('/pokedex', (req, res) => {
        Pokedex.findAll()
            .then(pokedex => res.json(pokedex))
            .catch(e => console.log(e))
    })

    app.get('/pokedex/:id', (req, res) => {
        Pokedex.findOne({ where: {id: req.params.id}})
            .then(pokedex => res.json(pokedex))
            .catch(e => console.log(e))
    })

    app.post('/pokedex', (req, res) => {
        Pokedex.create(req.body)
            .then(_=> res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.put('/pokedex/:id', (req, res) => {
        Pokedex.update(req.body, { where: { id: req.params.id }})
            .then(_=> res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.delete('/pokedex/:id', (req, res) => {
        Pokedex.destroy({ where: {id: req.params.id }})
            .then(_=> res.sendStatus(200))
            .catch(e => console.log(e))
    })
}