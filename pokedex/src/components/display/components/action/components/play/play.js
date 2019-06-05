import './play.css'

import React, { Component } from 'react'

class Play extends Component {
    ParkBtn = () => {
        let tmpStr = {
            action: 'park',
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    PetBtn = () => {
        let tmpStr = {
            action: 'pet',
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    ToyBtn = () => {
        let tmpStr = {
            action: 'toy',
            toy: this.ToyRandSel()
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    ToyRandSel = () => {
        let randToyArr = ['whip', 'eevee doll', 'knife', 'pikachu hat']
        return randToyArr[Math.floor(Math.random() * randToyArr.length)]
    }
    resetBtn = () => {
        this.props.reset()
    }
    render() {
        return (
            <>
                <div className='playInst'>Play with your pokemon!</div>
                <button className='actionBtn' id='Park' onClick={this.ParkBtn}>Park</button>
                <button className='actionBtn' id='Pet' onClick={this.PetBtn}>Pet</button>
                <button className='actionBtn' id='Toy' onClick={this.ToyBtn}>Toy</button>
                <button className='actionBtn' id='NVM' onClick={this.resetBtn}>NVM</button>
            </>
        )
    }
}

export default Play