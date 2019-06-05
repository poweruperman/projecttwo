import './train.css'

import React, { Component } from 'react'

class Train extends Component {
    resetBtn = () => {
        this.props.reset()
    }
    render() {
        return (
            <>
                <div className='firstPrompt'>Training is currently under construction. Please wait for Project 3.</div>
                <div className='secondPrompt'>Thank you. from UCI (Under Construction Indefinitely</div>
                <button className='NVM' onClick={this.resetBtn}>BACK</button>
            </>
        )
    }
}

export default Train