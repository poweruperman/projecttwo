import './sleep.css'

import React, { Component } from 'react'

class Sleep extends Component {
    resetBtn = () => {
        this.props.reset()
    }
    render () {
        return (
            <>
                <div className='sleepInst'>For how long would you like to sleep for</div>
                <label className='actionBtn' id='sleepLabel'>Input number of hours</label>
                <input className='actionBtn' id='sleepInput' placeholder='example : 2'></input>
                <button className='actionBtn' id='NVM' onClick={this.resetBtn}>NVM</button>
            </>
        )
    }
}

export default Sleep