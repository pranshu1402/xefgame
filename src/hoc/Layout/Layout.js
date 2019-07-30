import React, { Component, Fragment } from 'react';
import Header from '../../components/HeaderFooter/Header';
import Footer from '../../components/HeaderFooter/Footer';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions';
import firebase from '../../store/utility/firebaseConfig';
import './Layout.css';
 
class Layout extends Component {

    constructor(props){
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log("User is Authenticated");
                props.onLogin();
                this.redirectUser();
            }
        });
    }

    redirectUser = (redirectTo = this.props.redirectTo)=>{
        this.props.history.replace(redirectTo);
    }

    logoutUser = ()=>{
        console.log("logging Out"+this.props.redirectTo);
        this.props.onLogoutUser();
        this.redirectUser('/');
    } 

    render() {

        const {isSigned, userDetails, children} = this.props;
        return (
            <Fragment>
                <Header isSigned={isSigned} 
                userImage={!!userDetails?userDetails.photoURL:''} 
                onLogout={this.logoutUser}
                history={this.props.history}/>
                <main>
                    {children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return {
        isSigned: !!state.auth.user,
        userDetails: state.auth.user,
        redirectTo: state.auth.redirectTo
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onLogin: ()=>dispatch(actions.authStart()),
        onLogoutUser: ()=>dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);