import React, { Component } from 'react';
import MyGame from './MyGame';
import Spinner from '../../../../components/common/Spinner/Spinner';
import { changeTabOnGameClick } from '../../../../store/actions/tabsAction';
import { connect } from 'react-redux';
import './MyGames.css';

class MyGames extends Component {

    render() {
        let myGameskeys = [];
        
        if(this.props.myEnrolledGames!==null)
            myGameskeys = Object.keys(this.props.myEnrolledGames);
        
        return (
            (myGameskeys.length!== 0)? (
                <div className="rootMyMatches">
                    { myGameskeys.map( myGameKey => (
                                <div key={myGameKey} className="gameSection">
                                    <label className="myGameTag">
                                        {myGameKey}
                                    </label>
                                {this.props.myEnrolledGames[myGameKey].map((enrolledMatch, index) => (
                                    <div key={index}
                                        onClick={() => this.props.makeChangeTab({label: "LEADERBOARD",
                                            matchToShowOnLeaderboard: enrolledMatch
                                        })}
                                    >
                                            <MyGame gameData={enrolledMatch} />
                                    </div>
                                ))}
                                </div>
                    ))}
                </div>
            ) : <Spinner />
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
export default connect(mapStateToProps, mapDispatchToProps)(MyGames);