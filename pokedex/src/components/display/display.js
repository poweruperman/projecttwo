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



class Display extends Component {
    state = {
        user_id: this.props.user_id,
        front_img: '',
        back_img: '',
        affection: '',
        affectionT: '',
        anger: '',
        angerT: '',
        boredom: '',
        boredomT: '',
        exhaust: '',
        exhaustT: '',
        hunger: '',
        hungerT: '',
        sadness: '',
        sadnessT: '',
        background: 'default.jpg',
        pokeState: false,
        isBackgroundReady: false,
        isReady: false
    }
    testFunc = () => {
        console.log(moment().format('YYYY-MM-DD kk:mm:ss'))
    }
    testFunc2 = () => {
        this.setState(prevState => ({
            pokeState: !prevState.pokeState
        }))
        console.log(`This is PokeState : ${this.state.pokeState}`)
    }
    getJoinData = (userID) => {
        fetch(`/join/${userID}`)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.setState({
                    front_img: r.front_img,
                    back_img: r.back_img,
                    affection: r.affection,
                    affectionT: r.affectionT,
                    anger: r.anger,
                    angerT: r.angerT,
                    boredom: r.boredom,
                    boredomT: r.boredomT,
                    exhaust: r.exhaust,
                    exhaustT: r.exhaustT,
                    hunger: r.hunger,
                    hungerT: r.hungerT,
                    sadness: r.sadness,
                    sadnessT: r.sadnessT,
                    background: r.background,
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
    objCreator = (aVal, aSign, bVal, bSign, cVal, cSign, dVal, dSign, eVal, eSign, fVal, fSign) => {
        let tmp = {
            affection: aSign ? (this.state.affection + aVal) : (this.state.affection - aVal),
            affectionT: moment().format('YYYY-MM-DD kk:mm:ss'),
            anger: bSign ? (this.state.anger + bVal) : (this.state.anger - bVal),
            angerT: moment().format('YYYY-MM-DD kk:mm:ss'),
            boredom: cSign ? (this.state.boredom + cVal) : (this.state.boredom - cVal),
            boredomT: moment().format('YYYY-MM-DD kk:mm:ss'),
            exhaust: dSign ? (this.state.exhaust + dVal) : (this.state.exhaust - dVal),
            exhaustT: moment().format('YYYY-MM-DD kk:mm:ss'),
            hunger: eSign ? (this.state.hunger + eVal) : (this.state.hunger - eVal),
            hungerT: moment().format('YYYY-MM-DD kk:mm:ss'),
            sadness: fSign ? (this.state.sadness + fVal) : (this.state.sadness - fVal),
            sadnessT: moment().format('YYYY-MM-DD kk:mm:ss')
        }
        console.log(tmp.affection)
        return tmp
    }
    actionStatus = (dataFromChild) => {
        //use data from Child here
        switch (dataFromChild.action) {
            case 'feed':
                this.actionStatusFeed(dataFromChild)
                break;
            case 'sleep':
                break;
            case 'train':
                break;
            case 'park':
                break;
            case 'pet':
                break;
            case 'toy':
                break;
            default: break;
        }
    }
    actionStatusFeed = (obj) => {
        switch (obj.food) {
            case 'Candy':
                    let CandyObj = this.objCreator(10, 1, 10, 0, 0, 0, 5, 1, 5, 0, 10, 0)
                    this.putJoinData(this.state.user_id, CandyObj)
                break;
            case 'Meal':
                    let MealObj = this.objCreator(3, 1, 5, 0, 0, 0, 10, 1, 5, 0)
                    this.putJoinData(this.state.user_id, MealObj)
                break;
            case 'Drink':
                    let DrinkObj = this.objCreator(0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0)
                    this.putJoinData(this.state.user_id, DrinkObj)
                break;
            default: break;
        }
    }

    componentDidMount = () => {
        this.getJoinData(this.state.user_id)
        setTimeout(() => {
            this.setState({
                isBackgroundReady: true,
                isReady: true
            })
        }, 5000)
        // setInterval(() => {
        //     let tmp = this.objCreator(1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
        //     this.putJoinData(this.state.user_id, tmp)
        // }, 10000)
        setInterval(() => {
            let tmp = this.objCreator(1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
            this.putJoinData(this.state.user_id, tmp)
        }, 1800000)
    }
    render() {
        const { user_id, front_img, back_img, background, isBackgroundReady, pokeState, affection, anger, boredom, exhaust, hunger, sadness, isReady } = this.state
        return (
            <>
                {/* <button onClick={() => this.countDown()}>Get Join Data</button>
                <br />
                <button onClick={() => this.testFunc()}>test btn : log the state</button>
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
                        <TStatUpdate user_id={user_id} hunger={hunger} affection={affection} anger={anger} boredom={boredom} exhaust={exhaust} sadness={sadness} isReady={isReady} />
                    </div>
                    <div className='Action'>
                        <Action user_id={user_id} isReady={isReady} actionStatus={this.actionStatus} />
                    </div>
                </div>
            </>
        )
    }
}
export default Display