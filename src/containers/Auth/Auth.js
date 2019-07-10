import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from './firebaseConfig';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import './Auth.css';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
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
                    open={!this.props.isSigned && this.state.open}
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
        onLoginComplete: () => dispatch(actions.authSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);