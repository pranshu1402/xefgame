import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class Auth extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div >
                {/* create a modal */}
                <Button label="Login"
                    onClickHandler={this.props.loginClickedHandler}
                    classname="login" />
                <Button label="SignUp"
                    onClickHandler={this.props.signUpClickedHandler}
                    classname="signUp" />
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