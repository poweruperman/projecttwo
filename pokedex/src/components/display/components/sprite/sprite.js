import React, { Component } from 'react'

class Sprite extends Component {
    state = {
        spriteURL : ''
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.props.pokeState ? this.setState({ spriteURL : this.props.front_img}) : this.setState({ spriteURL : this.props.back_img})
        }, 3000)
    }
    render () {
        const { pokeState, front_img, back_img, isReady } = this.props
        const { spriteURL } = this.state
        return (
            <>
            {isReady ? <img src={spriteURL} alt='spriteImg'/> : ''}
            </>
        )
    }
}

export default Sprite