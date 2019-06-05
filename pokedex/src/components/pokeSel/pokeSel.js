import './pokeSel.css'

import React, { Component } from 'react'
import Sprite from './component/sprite'
let moment = require("moment");


class PokeSel extends Component {
    state = {
        isReady: false,
        randNum: null,
        img: ''
    }
    tmp = {
        user_id: '',
        user_name: '',
        pokemon_nickname: '',
        hunger: '50',
        hungerT: moment().format('YYYY-MM-DD kk:mm:ss'),
        exhaust: '50',
        exhaustT: moment().format('YYYY-MM-DD kk:mm:ss'),
        boredom: '50',
        boredomT: moment().format('YYYY-MM-DD kk:mm:ss'),
        affection: '50',
        affectionT: moment().format('YYYY-MM-DD kk:mm:ss'),
        anger: '50',
        angerT: moment().format('YYYY-MM-DD kk:mm:ss'),
        sadness: '50',
        sadnessT: moment().format('YYYY-MM-DD kk:mm:ss'),
        pokemon_name: '',
        front_img: '',
        back_img: '',
        type_1: '',
        type_2: '',
        hp: '',
        attack: '',
        defense: '',
        sp_attack: '',
        sp_defense: '',
        speed: '',
        background: '',
        isBaby: '',
        canEvolve: '',
        createAt: moment().format('YYYY-MM-DD kk:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD kk:mm:ss'),
    }
    componentWillMount = () => {
        this.setState({ randNum: Math.floor(Math.random() * 151) })
    }
    componentDidMount = () => {
        this.getPokedex(this.state.randNum)
    }
    getPokedex(id) {
        fetch(`/pokedex/${id}`)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.tmp.pokemon_name = r.pokemon_name
                this.tmp.front_img = r.front_img
                this.tmp.back_img = r.back_img
                this.tmp.type_1 = r.type_1
                this.tmp.type_2 = r.type_2
                this.tmp.hp = r.hp
                this.tmp.attack = r.attack
                this.tmp.defense = r.defense
                this.tmp.sp_attack = r.sp_attack
                this.tmp.sp_defense = r.sp_defense
                this.tmp.speed = r.speed
                this.tmp.background = r.background
                this.tmp.isBaby = r.isBaby
                this.tmp.canEvolve = r.canEvolve
                this.tmp.user_id = this.props.user_id
                this.tmp.user_name = this.props.identifier
                this.setState({
                    img: r.front_img,
                    isReady: true
                })
            })
            .catch(e => console.log(e))
    }
    postJoinData = () => {
        fetch('/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.tmp)
        })
            .then(_ => {
                this.props.pokeSelected(true)
            })
            .catch(e => console.log(e))
    }
    setNickName = (name) => {
        this.tmp.pokemon_nickname = name
        this.postJoinData()
    }
    render() {
        const { user_id, isPokeSelReady } = this.props
        const { isReady, img } = this.state
        return (
            <>
                <div className='pokeSelContainer'>
                    {
                        isReady ?
                        <Sprite img={img} setNickName={this.setNickName} />
                        :
                        ''
                    }
                </div>
            </>
        )
    }
}

export default PokeSel

