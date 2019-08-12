import React, { Component } from 'react';

import './MyGames.css';
import { loadMyGamesData } from '../../../../utility/firebaseOps/getMyGamesData';
import { connect } from 'react-redux';
import MyGame from './MyGame';
import {  changeTabOnGameClick } from '../../../../store/actions/tabsAction';

class MyMatches extends Component {

    componentDidMount() {
        loadMyGamesData();
    }

    render() {
        let myGamesKeys;
        if (this.props.myEnrolledGames !== null) {
            myGamesKeys = Object.keys(this.props.myEnrolledGames);
            // console.log("keys", this.props.myEnrolledGames, myGamesKeys);
        }

        return (
            myGamesKeys ?
                <div className="rootMyMatches">
                    {
                        myGamesKeys.map((myGamesKey) =>
                            this.props.myEnrolledGames[myGamesKey].map((enrolledMatch, index) =>
                                <div className="gameSection">
                                    <label className="myGameTag">{myGamesKey}</label>
                                    <div onClick={() => this.props.makeChangeTab(
                                        {
                                            label: "LEADERBOARD",
                                            matchToShowOnLeaderboard:enrolledMatch
                                        }
                                        )}>
                                        <MyGame key={index} gameData={enrolledMatch} />
                                    </div>

                                </div>
                            ))
                    }

                </div> : <div></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        myEnrolledGames: state.myGames.myEnrolledGames
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeChangeTab: (data) => dispatch(changeTabOnGameClick(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyMatches);