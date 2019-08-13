import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';

class Leaderboard extends Component {

    render() {
        const { selectedMatchToShow, gamesData } = this.props;
        let myPlayersInSelectedMatch, teamsKeys;
        if (selectedMatchToShow != null) {
            myPlayersInSelectedMatch = gamesData[selectedMatchToShow.sport].teams[selectedMatchToShow.enrolledMatch.teamId]["players"];
            teamsKeys = Object.keys(gamesData[selectedMatchToShow.sport].teams);

        }
        return (
            selectedMatchToShow ?
                <div className="rootLeaderboard">
                    <div className="matchStartTag">Match To Start: <span>{selectedMatchToShow.date},
                    {selectedMatchToShow.time}</span></div>

                    <label>My Team</label>
                    {
                        myPlayersInSelectedMatch.map(player =>
                            <li>{selectedMatchToShow.enrolledMatch.teamId}:{player.name}:<span>0</span></li>
                        )
                    }

                    <div className="allPlayersScore">
                        {
                            teamsKeys.map((key) => {
                                return (
                                    <div>
                                        <lable className="leaderboardTeamName">{key}</lable>
                                        {
                                            gamesData[selectedMatchToShow.sport].teams[key]["players"].map(item => {
                                                return (<li className="leaderboardPlayerName" key={item.name}>{item.name}:0</li>)
                                            })
                                        }
                                    </div>

                                )
                            })
                        }

                    </div>
                    <div className="playerStatus">You are winning</div>

                </div> : <div style={{ width: "200px", color: "red", fontSize: "25px", margin: "auto" }}>Select  a Game from Game Tab</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMatchToShow: state.tabs.matchToShowOnLeaderboard,
        gamesData: state.myGames.myEnrolledGames
    }
}
export default connect(mapStateToProps)(Leaderboard);