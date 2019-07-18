import React, { Component } from 'react';

import firebase from 'firebase';
import ContestCardContainer from './ContestCardContainer/ContestCardContainer.js';

import { connect } from 'react-redux';
import PrizeMoneyModal from '../../components/contestCard/PrizeMoneyModal.js';

class Contests extends Component {

    constructor(props) {
        super(props);
        //remove it upon integrating with master
        firebase.initializeApp({
            apiKey: "AIzaSyAvFaVfKNvMyiYXWvsrcSdDNvUm0u_ByNY",
            authDomain: "xefgame-16f76.firebaseapp.com",
            databaseURL: "https://xefgame-16f76.firebaseio.com",
            projectId: "xefgame-16f76",
            storageBucket: "",
            messagingSenderId: "26773089280",
            appId: "1:26773089280:web:cd952c5d0b9fce05"
        });
    }

    render() {

        return (

            <div className="contests">
                <ContestCardContainer> </ContestCardContainer>
                {this.props.isModalOpen ? <PrizeMoneyModal  prizeMoneyDist={this.props.prizeMoneyDist}></PrizeMoneyModal>:null}
            </div>
                    
        )

    }
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.contest.isModalOpen,
        prizeMoneyDist: state.contest.prizeMoneyDist
    }
}

export default connect(mapStateToProps)(Contests);