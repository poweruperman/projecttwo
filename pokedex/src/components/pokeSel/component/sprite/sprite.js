import './sprite.css'

import React, { Component } from 'react'

class Sprite extends Component {
    handleSubmitClick = () => {
        const nameHere = this.name.value;
        this.props.setNickName(nameHere)
    }
    render() {
        const { img } = this.props
        return (
            <>
                <img src={img} id="poke" alt="your Pokemon" />
                <label htmlFor='nickName' className='submitForm'>Enter a nickname for your Pokemon:</label>
                <input type="text" id="pokeButton" ref={input => this.name = input} />
                <button onClick={this.handleSubmitClick}>Submit</button>
            </>
        )
    }
}

export default Sprite