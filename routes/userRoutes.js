const { User } = require('../model')


module.exports = app => {
    // app.get('/user', (req, res) => {
    //     User.findAll()
    //     .then(user => res.json(user))
    //     .catch(e => console.log(e))
    // })

    app.get('/user/:id', (req, res) => {
        User.findOne({ where: {id: req.params.id}})
        User.findOne({ where: {id: req.params.id},
            include: [{
                model: Join, include: [{model: Pokedex}]
            }]
        })
        .then(user => res.json(user))
        .catch(e => console.log(e))
    })

    app.get('/user/:id', (req, res) => {
        User.findOne({ where: {id: req.params.id}})
        .then(user => res.json(user))
        .catch(e => console.log(e))
    })

    app.post('/user', (req, res) => {
        User.create(req.body)
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.put('/user/:id', (req, res) => {
        User.update(req.body, { where: { id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })

    app.delete('/user/:id', (req, res) => {
        User.destroy({ where: {id: req.params.id }})
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
    })
}