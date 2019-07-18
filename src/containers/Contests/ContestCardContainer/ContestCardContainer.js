import React, { Component } from 'react';

import firebase from 'firebase';
import ContestRowCards from '../../../components/contestCard/ContestCardRow';

import './ContestCardContainer.css'

import * as action from '../../../store/actions/contestAction'
import { connect } from 'react-redux';

class ContestCardContainer extends Component {

    constructor(props) {
        super(props);
        this.allContests = [];
    }
    getPromiseOfContest(contestType) {
        return firebase.firestore().collection("contests").doc("contestType")
            .collection(contestType).get();
    }

    componentDidMount() {
        Promise.all([
            this.getPromiseOfContest("hotContests"),
            this.getPromiseOfContest("headToHead"),
            this.getPromiseOfContest("megaContest")])
            .then(querySnapshots => {
                let iar = [];
                querySnapshots.forEach(querySnapshot => {
                    iar = []
                    querySnapshot.forEach(contestItem => {
                        iar.push(contestItem.data());
                    })
                    this.allContests.push(iar);
                })
                this.props.setHotContests(this.allContests[0]);
                this.props.setHeadContests(this.allContests[1]);
                this.props.setMegaContests(this.allContests[2]);
                
            });
    }

    render() {
        return (
            <div>
                <h1 className="contestTypeTag">Hot Contests</h1>
                <ContestRowCards size={0} Contests={this.props.hotContests}></ContestRowCards>

                <h1 className="contestTypeTag">headToHead</h1>
                <ContestRowCards size={3} Contests={this.props.headToHead}></ContestRowCards>

                <h1 className="contestTypeTag">Mega Contests</h1>
                <ContestRowCards size={5} Contests={this.props.megaContest}></ContestRowCards>

            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        hotContests: state.contest.hotContests,
        megaContest: state.contest.megaContest,
        headToHead: state.contest.headToHead
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setHotContests: (hotContests) => dispatch(action.addHotContest(hotContests)),
        setMegaContests: (megaContest) => dispatch(action.addMegaContest(megaContest)),
        setHeadContests: (headToHead) => dispatch(action.addHeadContest(headToHead))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestCardContainer);