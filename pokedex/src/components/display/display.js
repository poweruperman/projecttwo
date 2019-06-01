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
        user_id : this.props.user_id
    }
    render() {
        const { user_id } = this.state
        return (
            <>
            <h1>${user_id}</h1>
            <div className='displayContainer'>
                <div className='pokemonSprite'>
                    <Sprite user_id={user_id}/>
                </div>
                <div className='TStatUpdate'>
                    <TStatUpdate user_id={user_id}/>
                </div>
                <div className='Action'>
                    <Action user_id={user_id}/>
                </div>
            </div>          
            </>
        )
    }
}
export default Display