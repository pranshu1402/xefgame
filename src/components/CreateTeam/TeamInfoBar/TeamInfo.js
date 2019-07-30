import React from 'react';
import './TeamInfo.css';

const TeamInfo = (props) => {
    const teams = Object.keys(props.teams);
    return (
        <div className="teamInstructions">
            <div className="infoPanel">
                <div className="playersCount">
                    Players
                    <div className="counter">{props.numPlayers}</div>/11
                </div>
                <div className="teamName">{teams[0].slice(0, 3).toUpperCase()} <div className="counter">{props.teams[teams[0]]}</div></div>
                <div className="teamName">{teams[1].slice(0, 3).toUpperCase()} <div className="counter">{props.teams[teams[1]]}</div></div>

                <div className="creditsInfo">
                    Credits <div className="counter">{props.credits}</div>
                </div>
                {/* progress bar */}
            </div>
            <div className="playerPanelControls">
                <span>Players</span> 
                <label className="switch" >
                    <input type="checkbox"/>
                    <span className="slider round" onClick={props.toggleViewHandler}></span>
                </label> 
                <span>My Team</span>
            </div>
        </div>
    );
};

export default TeamInfo;