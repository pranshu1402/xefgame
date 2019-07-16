import React from 'react';
import Paper from '@material-ui/core/Paper';
import './TeamInfo.css';

const TeamInfo = (props) => {
    return (
        <Paper className="teamInstructions">
            <div className="instruction">
                Max 7 players from a team
            </div>
            <div className="midInfoPanel">
                <div className="playersCount">
                    Players:
                    <div className="counter">{props.numPlayers}</div>/11
                </div>

                <div>{props.teams[0].name}: <span>{props.teams[0].count}</span></div>
                <div>{props.teams[1].name}: <span>{props.teams[1].count}</span></div>
                
                <div>
                    Credits: <div className="counter">{props.credits}</div>
                </div>
            </div>

            {/* progress bar */}

        </Paper>
    );
};

export default TeamInfo;