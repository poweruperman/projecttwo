import React, { Component } from 'react'
let moment = require("moment");

class PokeSel extends Component {
    state = { 
        stuff : ''
    }
    getData() {
        let status = {
            hunger : 0,
            hungerT : moment().format(),
            exhaust: 0,
            exhaustT: moment().format(),
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
            fetch(`/pokemon/:${id}`)
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    status.id = r.id
                    status.pokemon_name = r.pokemon_name
                    console.log(status)
        
                })
                .catch(e => console.log(e))
        }
    }
    render () {
        return (
            <> <button onClick={() => this.getData()}>Hello</button>

            <div>
                <span> {this.state.stuff} </span>
            </div>
            </>
        )
    }
}

export default PokeSel

