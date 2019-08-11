import React, { Component } from 'react';

import './MyGames.css';
import { loadMyGamesData } from '../../../../utility/firebaseOps/getMyGamesData';
import { connect } from 'react-redux';
import MyGame from './MyGame';

class MyMatches extends Component {

    componentDidMount() {
        loadMyGamesData();
    }

    render() {
        let myGamesKeys;
        if (this.props.myEnrolledGames!==null) {
            myGamesKeys = Object.keys(this.props.myEnrolledGames);
            console.log("keys",this.props.myEnrolledGames,myGamesKeys);
        }

        return (
            myGamesKeys?
            <div className="rootMyMatches">
                {
                    myGamesKeys.map((myGamesKey) =>
                        this.props.myEnrolledGames[myGamesKey].map((enrolledMatch,index) =>
                        <div>
                            <label className="myGameTag">{myGamesKey}</label>
                            <MyGame key={index} gameData={enrolledMatch} />
                        </div>
                           ))
                }

            </div>:<div></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        myEnrolledGames: state.myGames.myEnrolledGames
    }
}
export default connect(mapStateToProps)(MyMatches);