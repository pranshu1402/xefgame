import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseConfig } from './firebaseConfig';
import { uiConfig } from './firebaseConfig';

import './Auth.css';

class Auth extends Component {


    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);

    }
    anonymousLogin() {
        firebase.auth().signInAnonymously();

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user);
        });
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <button id="GuestBtn" onClick={this.anonymousLogin}>Login as Guest</button>
                {/* create a modal */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}



export default Auth;