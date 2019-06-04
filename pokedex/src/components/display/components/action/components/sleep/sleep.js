import './sleep.css'

import React, { Component } from 'react'

class Sleep extends Component {
    state = {
        duration : ''
    }
    actionSleep = (time) => {
        this.setState({ duration : time.target.value })
        console.log(time)
        console.log(`time is ${time}`)
        console.log(`duration is ${this.state.duration}`)
        let tmpStr = {
            action : 'sleep',
            duration : 4
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    resetBtn = () => {
        this.props.reset()
    }
    render () {
        return (
            <>
                <div className='sleepInst'>For how long would you like to sleep for</div>
                <form onSubmit={this.handleSubmit}>
                    <label className='actionBtn' id='sleepLabel'>
                        Input number of hours
                        <input type="text" className='actionBtn' id='sleepInput' value={this.state.duration} onChange={this.actionSleep}></input>
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                <button className='actionBtn' id='NVM' onClick={this.resetBtn}>NVM</button>
            </>
        )
    }
}

export default Sleep