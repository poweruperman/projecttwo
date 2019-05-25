
import React, { Component } from 'react'
// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



class Login extends Component {
  render() {
    const { uiConfig } = this.props
    return (
      <>
        <Container>
          <Card>
            <CardImg top width= '100%' src ='http://
            doanarae.com/doanarae/9358-team-rocket-wallpaper_31201.jpg'/>
          <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
          </Card>
        </Container>
      </>
    );
  }
}

export default Login 