import React, { Component, Fragment } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions';
import firebase from 'firebase';
import { firebaseConfig } from '../../store/utility/firebaseConfig';
import './Layout.css';

class Layout extends Component {

    constructor(props){
        super(props);
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
               this.props.onLogin();
            //    this.props.history.replace('/');
            }
        });
    }

    render() {
        const {isSigned, userDetails, onLogout, children} = this.props;
        return (
            <Fragment>
                <Header isSigned={isSigned} 
                userImage={!!userDetails?userDetails.photoURL:''} 
                onLogout={onLogout}/>
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
        userDetails: state.auth.user
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        onLogin: ()=>dispatch(actions.authStart()),
        onLogout: ()=>dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);