// Write a react page and functions to run actions
import React, { Component } from 'react'
const diff = require('./time.js')
const sample = require('./route.js')

// Feeding
// const feed = () => {
//     affection += 10
//     exhaust += 10
//     anger -= 10
//     sadness -= 10
//     hunger -= 10
// }
// // Sleep
// //function where user inputs the numbers of sleep hours 
// const sleepAction = () => {
//     let isAsleep = true
//     let userHours
//     const numHours = 8
//     if(isAsleep = true){
//         affection += 10
//         anger -= 10
//         sadness -= 10
//         exhaust -= 10
//     }
//     else if (numHours != userHours) { //when sleep is interrupted
//         anger += 10
//         sadness += 10
//         affection -= 10
//     }
// }
// // Train
// const trainAction = () => {
//     hunger += 10
//     exhaust += 10
//     affection -= 10
//     boredom -=10
// }
// // Park 
// const parkAction = () => {
//     affection += 10
//     hunger += 10
//     exhaust += 10
//     boredom -= 10
//     sadness -= 10
//     anger -= 10
// }
// // Pet
// const petAction = () => {
//     affection += 10
//     boredom -= 10
//     sadness -= 10
//     anger -= 10
// }
// Play 
// Clean
// Ignore

// const ignoreAction = () => {
//     sadness += 10
    
// }


// const timeDiff = (timeHere) => {
//     //possibilty for error here
//     let updatedAt = moment(timeHere, 'ddd, DD MMM YYYY kk:mm:ss').unix()
//     let diff = Math.floor((moment().unix() - updatedAt) / 60)
//     return diff
// }

// // whether they are going to die or not
// // Make sure they oo not go over 100 or below 0
// const tStatCheck = () => {
    
// }

//the update functions below can be condensed into one function
// // Function to run to update data
// const hungerUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.hungerT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         hunger += 10
//     }
// }
// const exhaustUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.exhaustT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         exhaust += 10
//     }
// }
// const boredomUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.boredomT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         boredom += 10
//     }
// }
// const angerUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.angerT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         anger += 10
//     }
// }
// const affectionUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.affectionT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         affection -= 10
//     }
// }
// const sadnessUpdate = (timeHere) => {
//     let diff = timeDiff(timeHere.sadnessT)
//     let execTime = Math.floor(diff % 10)
//     for (i = 0; i < execTime; i++) {
//         sadness += 10
//     }
// }




class action extends Component {



    render () {
        return (
            <>
                {/* All the action HTML will go in here */}
                {/* Functions will have to be written outside of Render() */}
                


            </>
        )
    }
}

export default action