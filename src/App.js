import React from 'react';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAzSDIOSzsZLdbRwrEJFbgA2RuRPclombk",
  authDomain: "test-iw-6b781.firebaseapp.com",
  databaseURL: "https://test-iw-6b781.firebaseio.com",
  projectId: "test-iw-6b781",
  storageBucket: "test-iw-6b781.appspot.com",
  messagingSenderId: "62178525741"
};

firebase.initializeApp(config);

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  async login() {
    const result = await auth().signInWithPopup(provider);
    this.setState({user: result.user.displayName});
  }

  async logout() {
    await auth().signOut();
    this.setState({user: ''});
  }

  render() {
    return (
      <div className="App">
        <p>{`Hi, ${this.state.user}!`}</p>
        <button onClick={this.login.bind(this)}>
          Login with Facebook
        </button>

        <button onClick={this.logout.bind(this)}>
          Logout
        </button>
      </div>
    );
  }
}
