import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseConfig } from './firebaseConfig';
import { uiConfig } from './firebaseConfig';
import { connect } from 'react-redux';
import './Auth.css';

class Auth extends Component {


    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
        this.state = {
            open: true,
        };

    }

    handleClose = () => {
        this.setState({ open: false });
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
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="login-dialog"
                    aria-describedby="login-dialog-description">

                    <DialogTitle id="login-dialog">{"LOG IN"}</DialogTitle>

                    <DialogContent>
                        <StyledFirebaseAuth uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()} />
                        <button id="GuestBtn"
                            onClick={this.anonymousLogin}>
                            Login as Guest
                        </button>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (state) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);