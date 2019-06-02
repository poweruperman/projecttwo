// for David, Gabe, and Nou
// Write react page with function to update tStat\
import './tStatUpdate.css'


import React, { Component } from 'react'
import moment from 'moment'

class TStatUpdate extends Component {
    state = { 
        stuff : ''
    }
    render () {
        const { affection, anger, boredom, exhaust, hunger, sadness } = this.props
        // const timeDiff = (timeHere) => {
        //     let updatedAt =  moment(timeHere, 'ddd, DD MMM YYYY kk:mm:ss').unix()
        //     let diff = Math.floor((moment().unix() - updatedAt) / 60)
        //     return diff
        // }

        return (
            <>
                <div className='tStatContainer'>
                    <div className='affection'>Affection : {affection}</div>
                    <div className='anger'>Anger : {anger}</div>
                    <div className='boredom'>Boredom : {boredom}</div>
                    <div className='exhaust'>Exhaust : {exhaust}</div>
                    <div className='hunger'>Hunger : {hunger}</div>
                    <div className='sadness'>Sadness : {sadness}</div>
                </div>
            </>
        )
    }
}

export default TStatUpdate
