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
    render() {
        const { isReady } = this.props
        const { firstSel, firstSelInfo } = this.state

        return (
            <>
                {isReady ?
                    firstSel ?
                        <div>
                            {(() => {
                                switch (firstSelInfo) {
                                    case 'feed' : 
                                        return <Feed actionStatus={this.props.actionStatus} />
                                    case 'sleep' : 
                                        return <Sleep actionStatus={this.props.actionStatus} />
                                    case 'train' : 
                                        return <Train actionStatus={this.props.actionStatus} />
                                    case 'play' : 
                                        return <Play actionStatus={this.props.actionStatus} />
                                    default : 
                                        return null;
                                }
                            })()}
                        </div>
                        :
                        <div className='actionContainer'>
                            <button className='feed' onClick={this.feedSelFunc} >Feed</button>
                            <button className='sleep' onClick={this.sleepSelFunc} >Sleep</button>
                            <button className='train' onClick={this.trainSelFunc} >Train</button>
                            <button className='play' onClick={this.playSelFunc} >Play</button>
                        </div>

                    : ''
                }
            </>
        )
    }
}

export default Action