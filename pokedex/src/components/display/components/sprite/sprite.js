import React, { Component } from 'react'

class Sprite extends Component {
    state = {

    }
    render () {
        const { pokeState, front_img, back_img} = this.props
        return (
            <>
            {pokeState ? <img src={front_img} alt='front'/> : <img src={back_img} alt='back' />}
            </>
        )
    }
}

export default Sprite