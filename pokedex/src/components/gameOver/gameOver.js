// Write a react page and functions when pokemon dies.
// This only runs when tStat goes below certain threshold

import React, { Component } from 'react'
import { Container, Card, CardImg } from 'reactstrap'
import MediaQuery from 'react-responsive'
import Responsive from 'react-responsive';
import './gameOver.css'

class GameOver extends Component {
    render() {
        const { uiConfig } = this.props
        return (
            <>
                {/* Stuff that will display when game is over */}
                <Container>
                    <Card>
                        {/* <CardImg top width='100%' src='https://gfycat.com/goodnaturedmagnificentgalapagossealion'/> */}
                        <div class="whitebox">
                        <h2 id="outro" span class="blinking">Your Pokemon has expired !</h2>
                        <p id="expired">Oh no! Looks like you've neglected your Pokemon too much. <br>
                        </br>They've chosen to go off and find a new home. <br></br>
                            As a trainer, we have to take good care of our Pokemon for them<br></br> to evolve and become an extension of us. <br></br>
                            Try again next time, trainer!
                        </p>
                        </div>
                    </Card>

                </Container>
            </>
        );
    }
}

export default GameOver