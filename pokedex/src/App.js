import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'
//components doesnt exist what folder do i hit
import Login from './component/login/login'


/**********************************************
 *  *** FIREBASE LOGIN FOR GLOBAL SCOPE ***   *
 **********************************************/
// Configure Firebase.
const config = {
  apiKey: "AIzaSyAIWFiv_P3GGtDJBD2MaC3R0jmxk0-xuW4",
  authDomain: "pokemontamagotchi.firebaseapp.com",
  databaseURL: "https://pokemontamagotchi.firebaseio.com",
  projectId: "pokemontamagotchi",
  storageBucket: "pokemontamagotchi.appspot.com",
  messagingSenderId: "439178602865",
  appId: "1:439178602865:web:5614d099bfddb5b8"
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};
/**********************************************/

class App extends Component {
  render() {
    const { login } = this.state
    return (
      <>
      <Router>
      <div>
     
      <Route exact path='/login' component={() => <login uiConfig={uiConfig} />} />

      </div>
      </Router>
      </>
    )
  }
}

export default App
