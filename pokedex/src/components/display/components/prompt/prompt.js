import './prompt.css'

import React, { Component } from 'react'

class Prompt extends Component {
    state = {

    }
    render() {
        const { isReady, promptState, promptWhat, pokeState } = this.props
        return (
            <>
                {isReady ?
                    pokeState ? <div className='prompt'>Your Pokemon is fairly content.</div>
                        :
                        <div className='prompt'>Your Pokemon is upset. What will you do?</div>
                    :
                    ''
                }
                {isReady ?
                    (() => {
                        switch (promptState) {
                            case 'feed':
                                return (() => {
                                    switch (promptWhat) {
                                        case 'Candy':
                                            return <div className='prompt'>Your Pokemon just had candy</div>
                                        case 'Meal':
                                            return <div className='prompt'>Your Pokemon just had a meal</div>
                                        case 'Drink':
                                            return <div className='prompt'>Your Pokemon just had a drink</div>
                                        default:
                                            return null
                                    }
                                })()
                            case 'sleep':
                                return (() => {
                                    switch (promptWhat) {
                                        case 'woke' : 
                                        return <div className='prompt'>Great job. You just woke up your sleeping Pokemon. He is UPSET.</div>
                                    default : 
                                        return <div className='prompt'>Your Pokemon is now asleep. Wake him up and he will definitely be upset.</div>
                                    }
                                })()
                            case 'train':
                                return <div className='prompt'>Nobody wants to train. But your Pokemon did.</div>
                            case 'park':
                                return <div className='prompt'>Great job! You went to the park with your Pokemon</div>
                            case 'pet':
                                return <div className='prompt'>You just pet your Pokemon!</div>
                            case 'toy':
                                return (() => {
                                    switch (promptWhat) {
                                        case 'whip':
                                            return <div className='prompt'>The only toy you had was a whip...Pokemon doesn't know what to do with it.</div>
                                        case 'eevee doll':
                                            return <div className='prompt'>You just gave an Eevee doll to your pokemon. Pokemon looks at you and wonders why?</div>
                                        case 'knife':
                                            return <div className='prompt'>OH NO! Your Pokemon played with a knife! Pokemon cut itself! Why are you just standing there?!</div>
                                        case 'pikachu hat':
                                            return <div className='prompt'>You just gave a Pikachu hat to your pokemon. I guess it's a great toy...?</div>
                                        default:
                                            return null
                                    }
                                })()
                            default:
                                return <div className='prompt'>Best way to raise a Pokemon is to let it go. Pokemon belongs to the wild.</div>
                        }
                    })()
                    :
                    ''
                }
            </>
        )
    }
}

export default Prompt