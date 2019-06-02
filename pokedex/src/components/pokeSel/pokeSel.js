import React, { Component } from 'react'
let moment = require("moment");


const status = {
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
class PokeSel extends Component {
    getPokedex() {
        let id = Math.floor(Math.random() * 151)
        fetch(`./pokedex/${id}`)
            .then(r => r.json())
            .then(r => {
                status.id = r.id
                status.pokemon_name = r.pokemon_name
                status.front_img = r.front_img
                status.back_img = r.back_img
                status.type_1 = r.type_1
                status.type_2 = r.type_2
                status.hp = r.hp
                status.attack = r.attack
                status.defense = r.defense
                status.sp_attack = r.sp_attack
                status.sp_defense = r.sp_defense
                status.speed = r.speed
                status.background = r.background
                status.isBaby = r.isBaby
                status.canEvolve = r.canEvolve

                console.log(status)

            })
            .catch(e => console.log(e))
    }
  //Post to Join Database

  //
render() {
    return (
        <>
            <button onClick={() => this.getPokedex()}> Hello </button>
        </>
    )
}
}

export default PokeSel

