import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dummyMatchData} from './leaderboardDummyData';
import './LeaderBoard.css';

class Leaderboard extends Component {
    getMyTeamOrPlayer = (teams,teamId) => {
        return teams.filter((team)=>team.teamId==teamId);
    }
    
    render() {
        const { selectedMatchToShow } = this.props;
        let myTeamOrPlayer;
        if (selectedMatchToShow != null) {
             myTeamOrPlayer = this.getMyTeamOrPlayer(selectedMatchToShow["team/Player"], selectedMatchToShow.BetOn);

        }
        return (
            selectedMatchToShow?
            <div className="rootLeaderboard">
                <div className="matchStartTag">Match To Start: <span>{selectedMatchToShow.date},{selectedMatchToShow.time}</span></div>
                {
                    selectedMatchToShow["team/Player"].map((team) =>
                        <li>{team.name}:<span>0</span></li>
                    )
                }
                {/* <div className="myPlayer">My Player : <span>{myTeamOrPlayer[0].name}</span> Bet: <span>500</span></div> */}
                <div className="playerStatus">You are winning</div>

            </div>:<div style={{ width:"200px",color: "red", fontSize:"25px", margin:"auto"}}>Select  a Game from Game Tab</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        selectedMatchToShow: state.tabs.matchToShowOnLeaderboard
    }
}
export default connect(mapStateToProps)(Leaderboard);