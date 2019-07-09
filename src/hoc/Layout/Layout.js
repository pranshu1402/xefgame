import React, { Component, Fragment } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';
import firebase from 'firebase';
import {connect} from 'react-redux';
import './Layout.css';

class Layout extends Component {
    logout= ()=>{
        firebase.auth().signOut().then(function() {
            console.log(" Sign-out successful.");
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
        this.props.resetUserData();
    }

    render() {
        return (
            <Fragment>
                <Header isSigned={this.props.isSigned} onLogout={this.logout}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return {
        isSigned: !!state.auth.user
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        resetUserData: ()=>dispatch({type:'RESET_USERDATA'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);