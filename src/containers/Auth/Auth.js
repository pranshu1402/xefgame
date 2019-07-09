import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseConfig, uiConfig } from './firebaseConfig';
import { connect } from 'react-redux';
import './Auth.css';

class Auth extends Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
        this.state = {
            open: true,
        };

        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
              // User is signed in.
              const userData = {
                  name: user.displayName,
                  email : user.email,
                  emailVerified : user.emailVerified,
                  photoURL : user.photoURL,
                  isAnonymous : user.isAnonymous,
                  uid : user.uid,
                  providerData : user.providerData,
              };
              
              console.log(userData);
              this.props.setUserData(userData);
              this.handleClose();
            }
          });
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.history.replace('/');
    }

    guestLogin = () => {
        firebase.auth().signInAnonymously();
        this.handleClose();
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
                            onClick={this.guestLogin}>
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
        isSigned: !!state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userData) => dispatch({ type: 'SET_USERDATA', userData }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);