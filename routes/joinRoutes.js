const { Join } = require('../model')


module.exports = app => {
    app.get('/join', (req, res) => {
        Join.findAll()
        .then(join => res.json(join))
        .catch(e => console.log(e))
    })

    app.get('/join/:id', (req, res) => {
        Join.findOne({ where: {id: req.params.id}})
        .then(join => res.json(join))
        .catch(e => console.log(e))
    })

    app.post('/join', (req, res) => {
        Join.create(req.body)
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.put('/join/:id', (req, res) => {
        Join.update(req.body, { where: { id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.delete('/join/:id', (req, res) => {
        Join.destroy({ where: {id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })
}