import React from 'react';

const  MyGame=(props)=>{
        return (
            <div className="myMatch">
                <p className="myMatchDate">{props.gameData.date},{props.gameData.time}</p>
                <p className="myMatchTeams">{props.gameData.matchType}</p>
                <p className="myMatchTeamID">{props.gameData.BetOn}</p>
                <div className="myMatchRankAndPoints">
                    <p>Winner: {props.gameData.winner}</p>
                    <p>Venue: {props.gameData.venue}</p>
                </div>
            </div>
        );
    }


export default MyGame;