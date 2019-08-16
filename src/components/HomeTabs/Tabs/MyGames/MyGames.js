import React, { Component } from 'react';
import MyGame from './MyGame';
import Spinner from '../../../../components/common/Spinner/Spinner';
import { changeTabOnGameClick } from '../../../../store/actions/tabsAction';
import { connect } from 'react-redux';
import './MyGames.css';
import MySnackbar from '../../../common/SnackBar/Snackbar'
import { loadMyGamesData } from '../../../../utility/firebaseOps/getMyGamesData';

class MyGames extends Component {
    constructor(props) {
        super(props);
        props.fetchGames();

    }

    render() {
        let myGameskeys = [];
        if (this.props.myEnrolledGames !== null)
            myGameskeys = Object.keys(this.props.myEnrolledGames);

        return (
            (this.props.loading) ? <Spinner /> : (
                (myGameskeys.length !== 0) ? (
                    <div className="rootMyMatches">
                        {this.props.isSnackbarOpen ? <MySnackbar /> : undefined}
                        {myGameskeys.map(myGameKey => (
                            <div key={myGameKey} className="gameSection">
                                <label className="myGameTag">
                                    {myGameKey}
                                </label>
                                <div className="gamesCardRow">
                                    {this.props.myEnrolledGames[myGameKey].matches.map((enrolledMatch, index) => (
                                        <div key={index}
                                            onClick={() => this.props.makeChangeTab({
                                                label: "LEADERBOARD",
                                                matchToShowOnLeaderboard: { enrolledMatch, sport: myGameKey }
                                            })}>
                                            <MyGame gameData={enrolledMatch} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>) : <span className="enrolledTag">Please enroll in some matches</span>)

        )
    }
}
const mapStateToProps = (state) => {
    return {
        myEnrolledGames: state.myGames.myEnrolledGames,
        isSnackbarOpen: state.contest.snackbarOpenOnEnrollment,
        isUserEnrolled: state.myGames.isUserEnrolled,
        loading: state.myGames.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeChangeTab: (data) => dispatch(changeTabOnGameClick(data)),
        fetchGames: () => dispatch(loadMyGamesData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyGames);