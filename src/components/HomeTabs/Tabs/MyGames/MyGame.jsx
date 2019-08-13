import React from 'react';

function getMyTeamOrPlayer(teams,teamId){
    return teams.filter((team)=>team.teamId==teamId);
}

const MyGame = (props) => {
    //let myBettedPlayer = getMyTeamOrPlayer(props.gameData["team/Player"],props.gameData.BetOn);
    //if(myBettedPlayer===undefined){
    //    return null;
    //}
    return (
        <div className="myMatch">
            <p className="myMatchDate">{props.gameData.date},{props.gameData.time}</p>
            <p className="myMatchTeams">{props.gameData.matchType}</p>
            {/* <p className="myMatchTeamID">Bet on:{myBettedPlayer[0].name}</p> */}
            <div className="myMatchRankAndPoints">
                <p>Winner: {props.gameData.winner}</p>
                <p>Venue: {props.gameData.venue}</p>
            </div>
        </div>
    );
}
export default MyGame;