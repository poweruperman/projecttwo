// TO DO
// Need to find a way to provide a background image depending on what the pokemon type is
import './display.css'
import React, { Component } from 'react'
import moment from 'moment'
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
        console.log(moment().format('YYYY-MM-DD kk:mm:ss'))
        console.log(this.sampleObj())
    }
    testFunc2 = () => {
        this.setState(prevState => ({
            pokeState : !prevState.pokeState
        }))
        console.log(`This is PokeState : ${this.state.pokeState}`)
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
    putJoinData = (userID, response) => {
        fetch(`/join/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        })
            .then(_ => {
                // This is where you initiate TStatInformation Update
                this.getJoinData(this.state.user_id)
            })
            .catch(e => console.log(e))
    }

    intervalObj = () => {
        let tmp = {
            affection : this.state.hunger - 10,
            affectionT : moment().format('YYYY-MM-DD kk:mm:ss'),
            anger : this.state.anger + 10,
            angerT : moment().format('YYYY-MM-DD kk:mm:ss'),
            boredom : this.state.boredom + 10,
            boredomT : moment().format('YYYY-MM-DD kk:mm:ss'),
            exhaust : this.state.exhaust + 10,
            exhaustT : moment().format('YYYY-MM-DD kk:mm:ss'),
            hunger : this.state.hunger + 10,
            hungerT : moment().format('YYYY-MM-DD kk:mm:ss'),
            sadness : this.state.sadness + 10,
            sadnessT : moment().format('YYYY-MM-DD kk:mm:ss')
        }
        return tmp
    }

    componentDidMount = () => {
        this.getJoinData(this.state.user_id)
        setTimeout(() => {
            this.setState({ 
                isBackgroundReady : true,
                isReady : true
            })
        }, 5000)
        setInterval(() => {
            let tmp = this.intervalObj()
            this.putJoinData(this.state.user_id, tmp)
        }, 1800000)
    }
    render() {
        const { user_id, front_img, back_img, background, isBackgroundReady, pokeState, affection, anger, boredom, exhaust, hunger, sadness, isReady } = this.state
        return (
            <>
                {/* <button onClick={() => this.countDown()}>Get Join Data</button> */}
                <br />
                <button onClick={() => this.testFunc()}>test btn : log the state</button>
                <br />
                <button onClick={() => this.testFunc2()}>test btn : change pokemon state</button>
                <br />
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