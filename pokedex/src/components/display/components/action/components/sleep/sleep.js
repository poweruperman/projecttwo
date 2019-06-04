import './sleep.css'

import React, { Component } from 'react'

class Sleep extends Component {
    state = {
        duration : ''
    }
    actionSleep = (time) => {
        let tmpStr = {
            action : 'sleep',
            duration : time
        }
        this.props.actionStatus(tmpStr)
        this.resetBtn()
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    handleSubmitClick = () => {
        const hoursHere = this.hours.value;
        this.setState({
            duration : hoursHere
        })
        this.actionSleep(hoursHere)
    }
    resetBtn = () => {
        this.props.reset()
    }
    render () {
        return (
            <>
                <div className='sleepInst'>For how long would you like to sleep for</div>

                <label className='actionBtn' id='sleepLabel'> Input number of hours</label>
                <input type='text' ref={input => this.hours = input}/>
                <button onClick={this.handleSubmitClick}>Submit</button>



                        <input type="text" className='actionBtn' id='sleepInput' value={this.state.duration} onChange={this.actionSleep}></input>
                    <input type='submit' value='Submit' />
                <button className='actionBtn' id='NVM' onClick={this.resetBtn}>NVM</button>
            </>
        )
    }
}

export default Sleep