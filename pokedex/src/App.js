import './App.css'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase'
// import { Button } from 'reactstrap'
import Login from './components/login'
import Display from './components/display'
import PokeSel from './components/pokeSel'

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
  signInSuccessUrl: '/pokeSel',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};
/**********************************************/

class App extends Component {
  state = {
    isSignedIn: false,
    isPokeSel: false,
    user_id: 'test',
    isReady: false,
    identifier: 'test identifier'
  }

  postUserData = (uid, email) => {
    fetch('/user', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        user_id : uid,
        identifier : email
      })
    })
      .then(_ => {
        // may have to do somthing here
      })
      .catch(e => console.log(e))
  }
  isPokeSelFunc = (uid) => {
    fetch(`/join/${uid}`)
      .then(r => r.json())
      .then(r => {
        console.log(r)
        if (r === null ) {
          this.setState({ isPokeSel : false })
        } else {
          this.setState({ isPokeSel : true })
        }
        console.log(`this is also PokeSel${this.state.isPokeSel}`)
      })
      .catch(e => console.log(e))
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn : true,
        user_id : user.uid,
        identifier : user.email
      })
      this.postUserData(user.uid, user.email)
      this.isPokeSelFunc(user.uid)
      setTimeout(() => {
        this.setState({ isReady : true })
        console.log(`pokeSel : ${this.state.isPokeSel}`)
        console.log(`isReady : ${this.state.isReady }`)
      }, 3000)
    })
  }


  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    const { isSignedIn, isPokeSel, user_id, isReady } = this.state
    return (
      <>
        <Router>
          <div>
            <Route exact path='/' component={() => isSignedIn ? (isReady ? (isPokeSel ? <Display user_id={user_id} /> : <PokeSel user_id={user_id} isReady={isReady} />) : '') : (<Login uiConfig={uiConfig} />)} />
          </div>
        </Router>
      </>
    )
  }
}

export default App