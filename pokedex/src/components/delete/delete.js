import React, { Component } from 'react'

class Delete extends Component {
    deleteThisUser = () => {
        fetch(`/join/${this.props.user_id}`, {
            method: 'DELETE'
        })
            .then(
                // render the page
            )
            .catch(e => console.log(e))
    }
    render(){
        return (
            <>
            <button className='deleteUser' onClick = {this.deleteThisUse}> Delete </button>
            </>
        )
    
    }
}

export default Delete