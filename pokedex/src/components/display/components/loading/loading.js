import React, { Component } from 'react'

class Loading extends Component {
    render () {
        let tmp = require('../background/images/loading.gif')
        return (
            <>
                <img src={tmp} alt='loding' />
            </>
        )
    }
}

export default Loading