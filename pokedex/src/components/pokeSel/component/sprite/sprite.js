import React, { Component } from 'react'

class Sprite extends Component {
    state = {
        name: ''
    }
    handleSubmitClick = () => {
        const nameHere = this.name.value;
        this.setState({
            name : nameHere
        })
        this.pokemonNickname(nameHere)
    }
    pokemonNickname = (name) => {
        console.log(name)
        this.props.setNickName(name)
    }
    render() {
        const { img } = this.props
        return (
            <>
                <img src={img} alt="your Pokemon" />

                <label htmlFor='nickName' className='submitForm'>Enter a nickname for your pokemon</label>
                <input type="text" ref={input => this.name = input} />
                <button onClick={this.handleSubmitClick}>Submit</button>
            </>
        )
    }
}

export default Sprite