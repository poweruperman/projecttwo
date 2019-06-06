import React, { Component } from 'react'

class Sprite extends Component {
    handleSubmitClick = () => {
        const nameHere = this.name.value;
        this.props.setNickName(nameHere)
    }
    componentDidMount = () => {
        console.log(this.props.img)
    }
    // //gif mount
    // componentDidMount = () => {
    //     console.log(this.props.gif)
    // }

    // //gif render
    // render() {
    //     const { gif } = this.props
    //     return (
    //     <img src={gif} id="pokeGif" alt="your Pokemon" />
    //     )
    // }
    render() {
        const { img } = this.props
        return (
            <>
                <div>
                <img src={img} id="poke" alt="your Pokemon" />
                </div>
                <label htmlFor='nickName' className='submitForm'>Enter a nickname for your Pokemon:</label>
                <input type="text" id="pokeButton" ref={input => this.name = input} />
                <button onClick={this.handleSubmitClick}>Submit</button>
            </>
        )
    }
}

export default Sprite