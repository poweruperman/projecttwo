import './feed.css'

import React, { Component } from 'react'

class Feed extends Component {
    CandyBtn = () => {
        let tmpStr = {
            action: 'feed',
            food: 'Candy'
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    MealBtn = () => {
        let tmpStr = {
            action: 'feed',
            food: 'Meal'
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    DrinkBtn = () => {
        let tmpStr = {
            action: 'feed',
            food: 'Drink'
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }

    resetBtn = () => {
        this.props.reset()
    }

    render() {
        return (
            <>
                <div className='feedInst'>What would you like to feed</div>
                {/* <button onClick={this.testFunc}>Test it out</button> */}
                <button className='actionBtn' id='Candy' onClick={this.CandyBtn} >Candy</button>
                <button className='actionBtn' id='Meal' onClick={this.MealBtn} >Meal</button>
                <button className='actionBtn' id='Drink' onClick={this.DrinkBtn} >Drink</button>
                <button className='actionBtn' id='NVM' onClick={this.resetBtn} >NVM</button>
            </>
        )
    }
}

export default Feed