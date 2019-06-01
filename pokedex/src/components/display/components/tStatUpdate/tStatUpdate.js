// for David, Gabe, and Nou
// Write react page with function to update tStat\

import React, { Component } from 'react'
import moment from 'moment'
// import Moment from 'react-moment'


const tmpObj = () => {
    return {
        hunger: 60,
        hungerT : 'Tue, 01 May 2012 19:12:16 GMT',
        exhaust : 50,
        exhaustT : 'Tue, 01 May 2012 19:12:16 GMT',
        boredom : 80,
        boredomT : 'Tue, 01 May 2012 19:12:16 GMT',
        affection : 30,
        affectionT : 'Tue, 01 May 2012 19:12:16 GMT',
        anger : 10,
        angerT : 'Tue, 01 May 2012 19:12:16 GMT',
        sadness : 40,
        sadnessT : 'Tue, 01 May 2012 19:12:16 GMT',
        createdAt: 'Tue, 01 May 2012 19:12:16 GMT',
        updatedAt: 'Tue, 01 May 2012 19:12:16 GMT'
    }
}
class TStatUpdate extends Component {

    state = { 
        stuff : 0
    }

    getData() {
        fetch('/pokemons')
            .then(r => r.json())
            .then(e => {
                this.setState({stuff : e})
            })
            .catch(e => console.log(e))
    }

    postData() {
        fetch('/pokemon/:id', {
            method : 'POST',

        }, {
            
        })
            
    }

    render () {


        const timeDiff = (timeHere) => {
            let updatedAt =  moment(timeHere, 'ddd, DD MMM YYYY kk:mm:ss').unix()
            let diff = Math.floor((moment().unix() - updatedAt) / 60)
            return diff
        }

        return (
            <>
                <button onClick={this.getData}>Hello</button>

                <div>
                    <span> {this.state.stuff} </span>
                </div>
                {/* Right top section of the page. */}
                {/* This is where tamagotchi stat for the pokemon is going to be displayed */}
            </>
        )
    }
}

export default TStatUpdate
