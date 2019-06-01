let moment = require("moment");

let status = {
    hunger : 0,
    hungerT : moment().format(),
    exhaust: 0,
    //exhaustT: moment().format(),
    hunger: 0,
    hungerT: moment().format(),
    exhaust: 0,
    exhaustT: moment().format(),
    boredom: 0,
    boredomT: moment().format(),
    affection: 0,
    affectionT: moment().format(),
    anger: 0,
    angerT: moment().format(),
    sadness: 0,
    sadnessT: moment().format(),
}

const test_1 = () => {
    let id = Math.floor(Math.random()*151)
    fetch('/pokemon/:id')
        .then(r => r.json())
        .then(r => {
            console.log(r)

        s(status).urlFront = r.data.stuff.urlFront
        })
        .catch(e => console.log(e))
}
// const test_2 = () => {
//     let id = this.props.user_id
//     fetch('/user/:id')
//         .then(r => r.json())
//         .then(r => {
//         s(status).user_email = r.data.stuff.user_email
//         })
//         .catch(e => console.log(e))

// }

// console.logs(status)


// const test_3 = () => {
//     fetch('/join', {
//         method : 'POST',
//         'content-Type' : 'something'
//     }, {
//         stuff : stuff
//         otherstuff : otherstuff
//     })
//         .then(console.log('sup dude'))
//         .catch(e => console.log(e))
// }

test_1()
// test_2()