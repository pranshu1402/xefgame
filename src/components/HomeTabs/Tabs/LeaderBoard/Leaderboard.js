import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';
import { fetchTeamsForScoreUpdates } from '../../../../store/actions/tabsAction';
import { getMatchStatusMessage } from '../../../../utility/getDataByperformingOps';


class Leaderboard extends Component {

    constructor(props) {
        super(props);
        if (props.selectedMatchToShow)
            props.fetchTeamsForScore(props.selectedMatchToShow.sport);
    }

    render() {

        const { selectedMatchToShow, gamesData, teams } = this.props;
        let matchStatus;
        let myPlayersInSelectedMatch, teamsKeys = [], teamsForScoreUpdates = [], message;
        if (selectedMatchToShow != null) {
            const { status } = selectedMatchToShow.enrolledMatch;
            matchStatus = status;
            myPlayersInSelectedMatch = gamesData[selectedMatchToShow.sport].teams[selectedMatchToShow.enrolledMatch.teamId]["players"];
            for (let key in gamesData[selectedMatchToShow.sport].teams) {
                if (selectedMatchToShow.enrolledMatch.teams.includes(key)) {
                    if(key===selectedMatchToShow.enrolledMatch.teamId){
                        teamsKeys[0]=key
                    }
                    else{
                        teamsKeys[1]=key
                    }
                    
                }
            }
            //listening realtime score updates
            for (let teamKey in teams) {
                if (this.props.selectedMatchToShow.enrolledMatch.teams.includes(teamKey)) {
                    if(teamKey===selectedMatchToShow.enrolledMatch.teamId){
                        teamsForScoreUpdates[0]={
                            [teamKey]: teams[teamKey]
                        }
                    }
                    else{
                        teamsForScoreUpdates[1]={
                            [teamKey]: teams[teamKey]
                        }
                    }
                    
                }
            }
           
           console.log(teamsForScoreUpdates,"kfajsdkfjlks");
            message = getMatchStatusMessage(teamsForScoreUpdates, selectedMatchToShow.enrolledMatch.teamId, selectedMatchToShow.enrolledMatch.status);

        }
        return (
            selectedMatchToShow ?
                <div className="rootLeaderboard">
                    <div className="matchStartTag">{`Match Status: `}
                        <span className="matchStartTagContent">{matchStatus} {matchStatus === 'Live' ? '' :
                            `, ${new Date(selectedMatchToShow.enrolledMatch.date).toDateString()}, ${selectedMatchToShow.enrolledMatch.time}`}
                        </span>
                    </div>

                    <div className="allPlayersScore">
                        <div className="playerScoreTags">
                            <span>Team</span>
                            <span>Set</span>
                            <span>Score</span>
                        </div>
                        {
                            teamsKeys.map((key, index) => {
                                return (
                                    <div>
                                        <div className="leaderboardTeamNScore">
                                            <span className="leaderboardTeamName">{key}</span>
                                            <label>{teamsForScoreUpdates.length > 0 ? teamsForScoreUpdates[index][key]["setWon"] : 0}</label>
                                            <label className="teamPoints">{teamsForScoreUpdates.length > 0 ? teamsForScoreUpdates[index][key]["score"] : 0}</label>
                                        </div>
                                        {
                                            // gamesData[selectedMatchToShow.sport].teams[key]["players"].map(item => {
                                            //     return (<li className="leaderboardPlayerName" key={item.name}>{item.name}</li>)
                                            // })
                                        }
                                    </div>

                                )
                            })
                        }

                    </div>

                    <div className="leaderboardMyTeam">
                        <span>My Team</span>
                        <label>{selectedMatchToShow.enrolledMatch.teamId}</label>
                        {
                            myPlayersInSelectedMatch.map(player =>
                                <li>{player.name}</li>
                            )
                        }
                        <span className="leaderboardBet">Bet Amount: <label>{selectedMatchToShow.enrolledMatch.betAmount}</label></span>
                    </div>

                    <div className="playerStatus">
                        {message ? message : "Error"}
                    </div>

                </div> : <div style={{ width: "200px", color: "red", fontSize: "25px", margin: "auto" }}>Select  a Game from Game Tab</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMatchToShow: state.tabs.matchToShowOnLeaderboard,
        gamesData: state.myGames.myEnrolledGames,
        teams: state.tabs.teams

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeamsForScore: (sport) => dispatch(fetchTeamsForScoreUpdates(sport))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);