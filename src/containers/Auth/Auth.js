import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';


class Auth extends Component {

    constructor(){
        super();
        this.state = {
            open: true,
        };
    }

    handleClose = ()=>{
        this.setState({open:false});
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
                        {/* <DialogContentText id="login-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText> */}
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

const mapDispatchToProps = (dispatch) => {
    return {
        loginClickedHandler: () => dispatch({ type: "LOGIN" }),
        signUpClickedHandler: () => dispatch({ type: "SIGN_UP" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);