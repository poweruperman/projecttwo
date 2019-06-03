import React, { Component } from 'react'

class Background extends Component {
    state = {
        loadingURL : require(`./images/loading.gif`),
        backgroundURL : require(`./images/${this.props.background}`)
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ backgroundURL : require(`./images/${this.props.background}`) })
        }, 3000)
    }
    render() {
        const { loadingURL, backgroundURL } = this.state
        const { background, isBackgroundReady } = this.props
        return (
            <>
                {isBackgroundReady ? <img src={backgroundURL} alt='backgroundHere' className='backgroundImg'/> : <img src={loadingURL} alt='loading Page'className='backgroundImg'/>  }
            </>
        )
    }
}

export default Background