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
import Prompt from './components/prompt'



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
        isReady: false,
        isAsleep: false,
        promptState: '',
        promptWhat: ''
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
                this.happyCheck()
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
        return tmp
    }
    actionStatus = (dataFromChild) => {
        console.log(this.state)
        if (this.state.isAsleep) {
            this.wokeAnger()
        } else {
            switch (dataFromChild.action) {
                case 'feed':
                    this.actionStatusFeed(dataFromChild)
                    break;
                case 'sleep':
                    this.actionStatusSleep(dataFromChild)
                    break;
                case 'train':
                    break;
                case 'park':
                    this.actionStatusPark(dataFromChild)
                    break;
                case 'pet':
                    this.actionStatusPet(dataFromChild)
                    break;
                case 'toy':
                    this.actionStatusToy(dataFromChild)
                    break;
                default: break;
            }
        }
    }
    wokeAnger = () => {
        let wokeObj = this.objCreator(100, 0, 100, 1, 0, 0, 20, 1, 0, 0, 0, 0)
        this.stateCheck(wokeObj)
            .then(thisObj => {
                this.putJoinData(this.state.user_id, thisObj)
                this.setState({ 
                    promptState : 'sleep',
                    promptWhat : 'woke',
                    isAsleep: false 
                })
            })
            .catch (e => console.log(e))
    }
    actionStatusFeed = (obj) => {
        switch (obj.food) {
            case 'Candy':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.food
                })
                let CandyObj = this.objCreator(3, 1, 3, 0, 0, 0, 2, 1, 2, 0, 3, 0)
                this.stateCheck(CandyObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            case 'Meal':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.food
                })
                let MealObj = this.objCreator(3, 1, 2, 0, 0, 0, 3, 1, 2, 0)
                this.stateCheck(MealObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            case 'Drink':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.food
                })
                let DrinkObj = this.objCreator(0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0)
                this.stateCheck(DrinkObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            default: break;
        }
    }
    actionStatusSleep = (obj) => {
        this.setState({
            promptState: obj.action,
            isAsleep: true
        })
        let sleepObj = this.objCreator(5, 1, 0, 0, 0, 0, 5, 0, 5, 1, 0, 0)
        this.stateCheck(sleepObj)
            .then(thisObj => {
                this.putJoinData(this.state.user_id, thisObj)
            })
    }
    actionStatusPark = (obj) => {
        this.setState({
            promptState: obj.action
        })
        let ParkObj = this.objCreator(3, 1, 3, 0, 3, 0, 3, 1, 3, 1, 3, 0)
        this.stateCheck(ParkObj)
            .then(thisObj => {
                this.putJoinData(this.state.user_id, thisObj)
            })
            .catch(e => console.log(e))
    }
    actionStatusPet = (obj) => {
        this.setState({
            promptState: obj.action
        })
        let PetObj = this.objCreator(3, 1, 3, 0, 5, 1, 0, 0, 0, 0, 3, 0)
        this.stateCheck(PetObj)
            .then(thisObj => {
                this.putJoinData(this.state.user_id, thisObj)
            })
            .catch(e => console.log(e))
    }
    actionStatusToy = (obj) => {
        switch (obj.toy) {
            case 'whip':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.toy
                })
                let whipObj = this.objCreator(10, 0, 6, 1, 0, 0, 0, 0, 0, 0, 4, 1)
                this.stateCheck(whipObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            case 'eevee doll':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.toy
                })
                let eeveeObj = this.objCreator(2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0)
                this.stateCheck(eeveeObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            case 'knife':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.toy
                })
                let knifeObj = this.objCreator(3, 0, 6, 1, 0, 0, 0, 0, 0, 0, 3, 1)
                this.stateCheck(knifeObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            case 'pikachu hat':
                this.setState({
                    promptState: obj.action,
                    promptWhat: obj.toy
                })
                let pikachuObj = this.objCreator(2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                this.stateCheck(pikachuObj)
                    .then(thisObj => {
                        this.putJoinData(this.state.user_id, thisObj)
                    })
                    .catch(e => console.log(e))
                break;
            default: break;
        }
    }
    async stateCheck(obj) {
        let response = await new Promise((resolve, reject) => {
            if (typeof obj === 'object') {
                Object.keys(obj).forEach(elem => {
                    if (elem === 'affection' || elem === 'anger' || elem === 'boredom' || elem === 'exhaust' || elem === 'hunger' || elem === 'sadness') {
                        if (obj[elem] <= 0) {
                            obj[elem] = 0
                        } else if (obj[elem] >= 100) {
                            obj[elem] = 100
                        }
                    }
                })
                resolve(obj)
            } else {
                reject(new Error('No object was passed'))
            }

        })
        return response
    }
    happyCheck = () => {
        let tmpTotal = this.state.anger + this.state.boredom + this.state.exhaust + this.state.hunger + this.state.sadness + (100 - this.state.affection)
        tmpTotal <= 180 ? this.setState({ pokeState: true }) : this.setState({ pokeState: false })

    }
    randNum = () => {
        return (Math.floor(Math.random() * 5) * 1000 + 5000)
    }
    componentDidMount = () => {
        this.getJoinData(this.state.user_id)
        setTimeout(() => {
            this.setState({
                isBackgroundReady: true,
                isReady: true
            })
        }, this.randNum())
        setInterval(() => {
            let tmp = this.objCreator(1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
            this.putJoinData(this.state.user_id, tmp)
        }, 1800000)
    }
    render() {
        const { user_id, front_img, back_img, background, isBackgroundReady, pokeState, affection, anger, boredom, exhaust, hunger, sadness, promptState, promptWhat, isReady } = this.state
        return (
            <>
                <div className='displayContainer'>
                    <div className='backgroundImg'>
                        <Background id='backgroundImg' background={background} isBackgroundReady={isBackgroundReady} />
                    </div>
                    <div className='pokemonSprite'>
                        <Sprite user_id={user_id} front_img={front_img} back_img={back_img} pokeState={pokeState} isReady={isReady} />
                    </div>
                    {isReady ? 

                        <div className='prompt'>
                            <Prompt user_id={user_id} pokeState={pokeState} isReady={isReady} promptState={promptState} promptWhat={promptWhat} />
                        </div>
                    : null
                    }
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