// TO DO
// Need to find a way to provide a background image depending on what the pokemon type is
import './display.css'
import React, { Component } from 'react'
import Action from './components/action'
import TStatUpdate from './components/tStatUpdate'
import Demand from './components/demand'
import Sprite from './components/sprite'
import Background from './components/background'
import Loading from './components/loading'



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
        background : 'default.jpg',
        pokeState : false,
        isBackgroundReady : false,
        isReady : false
    }
    testFunc = () => {
        console.log(this.state)
        console.log(this.state.background)
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
                this.setState({ 
                    front_img : r.front_img,
                    back_img : r.back_img,
                    affection : r.affection,
                    affectionT : r.affectionT,
                    anger : r.anger,
                    angerT : r.angerT,
                    boredom : r.boredom,
                    boredomT : r.boredomT,
                    exhaust : r.exhaust,
                    exhaustT : r.exhaustT,
                    hunger : r.hunger,
                    hungerT : r.hungerT,
                    sadness : r.sadness,
                    sadnessT : r.sadnessT,
                    background : r.background,
                })
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
    componentDidMount = () => {
        this.getJoinData(this.state.user_id)
        setTimeout(() => {
            this.setState({ 
                isBackgroundReady : true,
                isReady : true
            })
        }, 5000)
    }
    render() {
        const { user_id, front_img, back_img, background, isBackgroundReady, pokeState, affection, anger, boredom, exhaust, hunger, sadness, isReady } = this.state
        return (
            <>
                {/* <button onClick={() => this.countDown()}>Get Join Data</button> */}
                <br />
                {/* <button onClick={() => this.testFunc()}>test btn : log the state</button>
                <br />
                <button onClick={() => this.testFunc2()}>test btn : change pokemon state</button>
                <br /> */}
                <div className='displayContainer'>
                    <div className='backgroundImg'>
                        <Background id='backgroundImg' background={background} isBackgroundReady={isBackgroundReady} />
                    </div>
                    <div className='pokemonSprite'>
                        <Sprite user_id={user_id} front_img={front_img} back_img={back_img} pokeState={pokeState} isReady={isReady} />
                    </div>
                    <div className='TStatUpdate'>
                        <TStatUpdate user_id={user_id} hunger={hunger} affection={affection} anger={anger} boredom={boredom} exhaust={exhaust} sadness={sadness} isReady ={isReady} />
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