// TO DO
// Need to finalize the authentication
// Authentication page will have to output following information
// user_id
// pokemon_type


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
   isReady : false
 }
 //CHECK FOR STATE CHANGES IN LOGIN
 componentWillMount() {
   firebase.auth().onAuthStateChanged(
     (user) => this.setState({ isSignedIn: !!user, user_id: user.uid, isReady : true })
   )
 }
 // Listen to the Firebase Auth state and set the local state.
 componentDidMount() {
   this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
     (user) => {
       this.setState({ isSignedIn: !!user, user_id: user.uid })
       console.log(this.state.user_id)
     }
   );
 }
 // Make sure we un-register Firebase observers when the component unmounts.
 componentWillUnmount() {
   this.unregisterAuthObserver();
 }
 render() {
   const { login } = this.state
   const { isSignedIn, isPokeSel, user_id, isReady } = this.state
   return (
     <>
       <Router>
         <div>
           <Route exact path='/' component={() => isSignedIn ? (<Display user_id={user_id} />) : (<Login uiConfig={uiConfig} />)} />
           <Route exact path='/login' component={() => isPokeSel ? (<Display user_id={user_id} />) : (<PokeSel />)} />
           <Route exact path='/display' component={() => isReady ? <Display user_id={user_id} /> : (<Login uiConfig={uiConfig} />)} />
         </div>
       </Router>
     </>
   )
 }
}

export default App