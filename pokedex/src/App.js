import './App.css'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase'
import Login from './components/login'
import Display from './components/display'
import PokeSel from './components/pokeSel'

/**********************************************
*  *** FIREBASE LOGIN FOR GLOBAL SCOPE ***   *
**********************************************/
// Configure Firebase.
const config = {
  apiKey: "AIzaSyBsl51x6ee4Fw3vAVxaV-bMWjXfjC0DjkQ",
  authDomain: "pokemontamagotchi-cba50.firebaseapp.com",
  databaseURL: "https://pokemontamagotchi-cba50.firebaseio.com",
  projectId: "pokemontamagotchi-cba50",
  storageBucket: "pokemontamagotchi-cba50.appspot.com",
  messagingSenderId: "61180746516",
  appId: "1:61180746516:web:65b3146710e92417"
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
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
    isPokeSelReady: false,
    user_id: 'test',
    identifier: 'test identifier'
  }
  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: true,
        user_id: user.uid,
        identifier: user.email
      })
      this.postUserData(user.uid, user.email)
    })
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  postUserData = (uid, email) => {
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: uid,
        identifier: email
      })
    })
      .then(_ => {
        this.isPokeSelFunc(uid)
      })
      .catch(e => console.log(e))
  }
  isPokeSelFunc = (uid) => {
    fetch(`/join/${uid}`)
      .then(r => r.json())
      .then(r => {
        if (r === null) {
          this.setState({
            isPokeSel: false,
            isPokeSelReady: false
          })
        } else {
          if (r.pokemon_name.length >= 1) {
            this.setState({
              isPokeSel: true,
              isPokeSelReady: true
            })
          } else {
            this.setState({
              isPokeSel: false,
              isPokeSelReady: true
            })
          }
        }
      })
      .catch(e => console.log(e))
  }
  pokeSelected = (data) => {
    if (data) {
      this.setState({ isPokeSel : true })
    } else {
      this.setState({ isPokeSel : false})
    }
  }
  render() {
    const { isSignedIn, isPokeSel, user_id, isPokeSelReady } = this.state
    return (
      <>
        <Router>
          <div>
            <Route exact path='/' component={() => {
              if (isSignedIn === true && isPokeSel === true)
                return <Display user_id={user_id} />
              if (isSignedIn === true && isPokeSel === false)
                return <PokeSel user_id={user_id} isPokeSelReady={isPokeSelReady} pokeSelected={this.pokeSelected} />
              else
                return <Login uiConfig={uiConfig} />
            }} />
          </div>
        </Router>
      </>
    )
  }
}

export default App