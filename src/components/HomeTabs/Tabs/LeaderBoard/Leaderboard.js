import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LeaderBoard.css';

class Leaderboard extends Component {
   
    
    render() {
        const { selectedMatchToShow } = this.props;
       
        return (
            selectedMatchToShow?
            <div className="rootLeaderboard">
                <div className="matchStartTag">Match To Start: <span>{selectedMatchToShow.date},{selectedMatchToShow.time}</span></div>
                {
                    // selectedMatchToShow["team/Player"].map((team) =>
                    //     <li>{team.name}:<span>0</span></li>
                    // )
                }
    
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