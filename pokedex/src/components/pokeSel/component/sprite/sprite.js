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
                <img src={img} alt="your Pokemon" />
                <label htmlFor='nickName' className='submitForm'>Enter a nickname for your pokemon</label>
                <input type="text" ref={input => this.name = input} />
                <button onClick={this.handleSubmitClick}>Submit</button>
            </>
        )
    }
}

export default Sprite