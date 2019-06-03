import React, { Component } from 'react'

class Feed extends Component {
    testFunc = () => {
        let tmpStr = 'Hello Grandpa'
        this.props.actionStatus(tmpStr)
    }

    render () {
        return (
            <>
                <div>This is Feed</div>
                <button onClick={this.testFunc}>Test it out</button>
            </>
        )
    }
}

export default Feed