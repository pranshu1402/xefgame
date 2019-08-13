import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dummyMatchData} from './leaderboardDummyData';
import './LeaderBoard.css';

class Leaderboard extends Component {
    
    render() {
        const { selectedMatchToShow, gamesData, selectedSport } = this.props;
        let myTeamOrPlayer;
        if (selectedMatchToShow != null) {
             console.log(gamesData, selectedSport);
             const allTeams = gamesData[selectedSport].teams;
             myTeamOrPlayer = allTeams[selectedMatchToShow.teamId];
             console.log("my Team ", myTeamOrPlayer);
             if(myTeamOrPlayer===null)
                return (<div>Team Not found</div>);
        }
        return (
            selectedMatchToShow?
            <div className="rootLeaderboard">
                <div className="matchStartTag">Match To Start: <span>{selectedMatchToShow.date},{selectedMatchToShow.time}</span></div>
                {
                    myTeamOrPlayer.players.map( player =>
                        <li>{player.name}:<span>0</span></li>
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
        selectedSport: state.tabs.matchToShowOnLeaderboard.sport,
        selectedMatchToShow: state.tabs.matchToShowOnLeaderboard.enrolledMatch,
        gamesData: state.myGames.myEnrolledGames
    }
}
export default connect(mapStateToProps)(Leaderboard);