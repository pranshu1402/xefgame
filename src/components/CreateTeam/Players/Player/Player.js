import React from 'react';
import { Avatar } from '@material-ui/core';

const Player = (props) => {
    return (
        <div className="playerCard">
            <div className="playerAvatar">
                <Avatar src={props.player.imageURL}/>
            </div>

            <div className="playerInfo">
                <div className="playerNameBox">
                    <div className="playerName">{props.player.name}</div>
                    <div className="playerTeamTitle">{props.player.majorTeams.split(',')[0]} {props.player.playingRole.slice(0,3)}</div>
                </div>
                <div className="playerPoints"> {props.points}</div>
                <div className="playerCredits"> {props.credits}</div>
            </div>
        </div>
    );
};

export default Player;