import React from 'react';
import './TeamInfo.css';

const TeamInfo = (props) => {
    const teams = Object.keys(props.teams);
    return (
        <div className="teamInstructions">
            <div className="infoPanel">
                <div className="playersCount">
                    Players:
                    <div className="counter">{props.numPlayers}</div>/11
                </div>
                {console.log(teams, props.teams)}
                <div className="teamName">{teams[0]}: <span>{props.teams[teams[0]]}</span></div>
                <div className="teamName">{teams[1]}: <span>{props.teams[teams[1]]}</span></div>
                
                <div className="creditsInfo">
                    Credits: <div className="counter">{props.credits}</div>
                </div>
                {/* progress bar */}

            </div>
        </div>


    );
};

export default TeamInfo;