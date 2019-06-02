// TO DO
// Need to find a way to provide a background image depending on what the pokemon type is
import './display.css'
import React, { Component } from 'react'
import Action from './components/action'
import TStatUpdate from './components/tStatUpdate'
import Demand from './components/demand'
import Sprite from './components/sprite'



class Display extends Component {
    state = {
        user_id: this.props.user_id,
        front_img : '',
        back_img : '',
        affection : '',
        affectionT : '',
        anger : '',
        angerT : '',
        boredom : '',
        boredomT : '',
        exhaust : '',
        exhaustT : '',
        hunger : '',
        hungerT : '',
        sadness : '',
        sadnessT : '',
        background : '',
        pokeState : false
    }
    testFunc = () => {
        console.log(this.state)
    }
    testFunc2 = () => {
        this.setState(prevState => ({
            pokeState : !prevState.pokeState
        }))
    }
    getJoinData = (userID) => {
        fetch(`/join/${userID}`)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.setState({ front_img : r.front_img })
                this.setState({ back_img : r.back_img })
                this.setState({ affection : r.affection })
                this.setState({ affectionT : r.affectionT })
                this.setState({ anger : r.anger })
                this.setState({ angerT : r.angerT })
                this.setState({ boredom : r.boredom })
                this.setState({ boredomT : r.boredomT })
                this.setState({ exhaust : r.exhaust })
                this.setState({ exhaustT : r.exhaustT })
                this.setState({ hunger : r.hunger })
                this.setState({ hungerT : r.hungerT })
                this.setState({ sadness : r.sadness })
                this.setState({ sadnessT : r.sadnessT })
                this.setState({ background : r.background })
            })
            .catch(e => console.log(e))
    }
    putJoinData = (userID) => {
        fetch(`/join/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        })
            .then(_ => {

            })
            .catch(e => console.log(e))
    }

    render() {
        const { user_id, front_img, back_img, background, pokeState, affection, anger, boredom, exhaust, hunger, sadness } = this.state
        return (
            <>
                <button onClick={() => this.getJoinData(user_id)}>Get Join Data</button>
                <br />
                <button onClick={() => this.testFunc()}>test btn : log the state</button>
                <br />
                <button onClick={() => this.testFunc2()}>test btn : change pokemon state</button>
                <br />
                <div className='displayContainer'>
                    <div className='pokemonSprite'>
                        <Sprite user_id={user_id} front_img={front_img} back_img={back_img} pokeState={pokeState} />
                    </div>
                    <div className='TStatUpdate'>
                        <TStatUpdate user_id={user_id} hunger={hunger} affection={affection} anger={anger} boredom={boredom} exhaust={exhaust} sadness={sadness}/>
                    </div>
                    <div className='Action'>
                        <Action user_id={user_id} />
                    </div>
                </div>
            </>
        )
    }
}
export default Display