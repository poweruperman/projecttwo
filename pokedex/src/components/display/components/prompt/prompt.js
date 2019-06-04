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
                    pokeState ? <div classNme='prompt'>Your pokemon is fairly content I guess?</div>
                        :
                        <div classNme='prompt'>Your pokemon is pissed dawg</div>
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
                                            return <div classNme='prompt'>You just fed Candy to your pokemon</div>
                                        case 'Meal':
                                            return <div classNme='prompt'>Your pokemon just had a meal</div>
                                        case 'Drink':
                                            return <div classNme='prompt'>Your pokemon just had a drink</div>
                                        default:
                                            return null
                                    }
                                })()
                            case 'sleep':
                                return <div classNme='prompt'></div>
                            case 'train':
                                return <div classNme='prompt'>Nobody wants to train. But your pokemon did. All because of you</div>
                            case 'park':
                                return <div classNme='prompt'>Great job! you dragged yo ass out of your house to the park with yo pokemon</div>
                            case 'pet':
                                return <div classNme='prompt'>You just petted your pokemon! Hope your pokemon isn't on fire</div>
                            case 'toy':
                                return (() => {
                                    switch (promptWhat) {
                                        case 'whip':
                                            return <div classNme='prompt'>The only toy you had was a whip...You just whipped your pokemon...What is wrong with you...You sick crazy bastard</div>
                                        case 'eevee doll':
                                            return <div classNme='prompt'>You just gave an eevee doll to your pokemon. Pokemon looks at you and wonders why</div>
                                        case 'knife':
                                            return <div classNme='prompt'>OH NO! Your pokemon played with a knife! Pokemon cut itself! Why are you just standing there?!</div>
                                        case 'pikachu hat':
                                            return <div classNme='prompt'>You just gave pikachu hat to your pokemon. I guess it's a great toy...?</div>
                                        default:
                                            return null
                                    }
                                })()
                            default:
                                return <div classNme='prompt'>Best way to raise pokemon is to let it go. Pokemon belongs to the wild.</div>
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