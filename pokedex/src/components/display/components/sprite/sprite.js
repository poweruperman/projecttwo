
import React, { Component } from 'react'

class Sprite extends Component {
    state = {

    }
    render () {
        const { pokeState, front_img, back_img, isReady} = this.props
        return (
            <>
            {isReady ? 
                pokeState ? 
                    <img src={front_img} alt='front' className='spriteImg' /> 
                    : <img src={back_img} alt='back'  className='spriteImg' /> 
                : null}
            </>
        )
    }
}

export default Sprite