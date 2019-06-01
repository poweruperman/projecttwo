
import React, { Component } from 'react'
import { Container, Card, CardImg } from 'reactstrap'
import './login.css'

// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



class Login extends Component {
  render() {
    const { uiConfig } = this.props
    return (
      <>
        {/* <h1>Hello World!!</h1> */}
        <Container>
          <Card>
            <CardImg top width='100%' src='https://davidlampreia.files.wordpress.com/2013/12/pokemon-pikachu.jpg' />
            <div id="login">
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
            <h2 id="intro" span class="blinking"> Welcome to Pokegatchi !</h2>
            <p id="instrc">This is a fusion of Pokemon and Tamagotchi, where you get the
          best <br></br> of both worlds of raising your very own Pokemon! Feed it,
          play with it, love <br></br>and care for
          your very own Pokegatchi!<br></br>
              <iframe src="https://giphy.com/embed/JgCZ2hksM1abS" title ="pokemonFrame" width="150" height="150" frameBorder="0" alignt="right" id="pokeball"></iframe><a href="https://giphy.com/stickers/pokeball-JgCZ2hksM1abS"></a>
            </p>
            {/* <iframe src="https://giphy.com/embed/JgCZ2hksM1abS" width="250" height="250" frameBorder="0" alignt="right" id="pokeball"></iframe><a href="https://giphy.com/stickers/pokeball-JgCZ2hksM1abS"></a> */}
          </Card>
        </Container>
      </>
    );
  }
}

export default Login 