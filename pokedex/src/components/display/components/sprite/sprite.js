
import React, { Component } from 'react'

class Sprite extends Component {
    state = {

    }
    render () {
        const { pokeState, front_img, back_img, isReady} = this.props
        return (
            <>
            {isReady ? pokeState ? <img src={front_img} alt='front'/> : <img src={back_img} alt='back' /> : null}
            </>
        )
    }
}

export default Sprite




// May need to come back and check this code one more time

// import React, { Component } from 'react'

// class Sprite extends Component {
//     state = {
//         spriteURL : ''
//     }
//     componentDidMount = () => {
//         setTimeout(() => {
//             console.log(this.props.pokeState)
//             this.props.pokeState ? this.setState({ spriteURL : this.props.front_img}) : this.setState({ spriteURL : this.props.back_img})
//         }, 3000)
//     }
//     render () {
//         const { pokeState, front_img, back_img, isReady } = this.props
//         const { spriteURL } = this.state
//         return (
//             <>
//             {isReady ? <img src={spriteURL} alt='spriteImg'/> : ''}
//             </>
//         )
//     }
// }

// export default Sprite