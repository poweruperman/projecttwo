import './action.css'

import React, { Component } from 'react'
import Feed from './components/feed'
import Sleep from './components/sleep'
import Train from './components/train'
import Play from './components/play'

class Action extends Component {
    state = {
        firstSel: false,
        firstSelInfo: '',
        playSelInfo: '',
        resetSel: false,
    }
    feedSelFunc = () => {
        this.setState({
            firstSel: true,
            firstSelInfo: 'feed'
        })
    }
    sleepSelFunc = () => {
        this.setState({
            firstSel: true,
            firstSelInfo: 'sleep'
        })
    }
    trainSelFunc = () => {
        this.setState({
            firstSel: true,
            firstSelInfo: 'train'
        })
    }
    playSelFunc = () => {
        this.setState({
            firstSel: true,
            firstSelInfo: 'play'
        })
    }
    reset = () => {
        this.setState({
            firstSel: false,
            firstSelInfo: ''
        })
    }
    render() {
        const { isReady } = this.props
        const { firstSel, firstSelInfo } = this.state

        return (
            <>
                {isReady ?
                    firstSel ?
                        <div className='actionContainer'>
                            {(() => {
                                switch (firstSelInfo) {
                                    case 'feed' : 
                                        return <Feed className='currentAct' actionStatus={this.props.actionStatus} reset={this.reset}/>
                                    case 'sleep' : 
                                        return <Sleep className='currentAct' actionStatus={this.props.actionStatus} reset={this.reset}/>
                                    case 'train' : 
                                        return <Train className='currentAct' actionStatus={this.props.actionStatus} reset={this.reset}/>
                                    case 'play' : 
                                        return <Play className='currentAct' actionStatus={this.props.actionStatus} reset={this.reset}/>
                                    default : 
                                        return null;
                                }
                            })()}
                        </div>
                        :
                        <div className='actionContainer'>
                            <button className='currentBtn' id='feedid' onClick={this.feedSelFunc} >Feed</button>
                            <button className='currentBtn' id='sleepid' onClick={this.sleepSelFunc} >Sleep</button>
                            <button className='currentBtn' id='trainid' onClick={this.trainSelFunc} >Train</button>
                            <button className='currentBtn' id='playid' onClick={this.playSelFunc} >Play</button>
                        </div>

                    : ''
                }
            </>
        )
    }
}

export default Action