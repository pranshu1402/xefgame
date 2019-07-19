import React from 'react';
import { Avatar } from '@material-ui/core';
import faker from 'faker';
import './Player.css';

const Player = (props) => {
    const disableClassName = "disableCard" + (props.disablePlayer?" disable":"");

    return (
        <div className="playerCard"
            onClick={()=> props.onSelect(props)}>
            
            <div className={disableClassName}></div>
            
            <div className="playerAvatar">
                <Avatar alt='' src={faker.image.avatar()}/>
            </div>

            <div className="playerInfo">
                <div className="playerNameBox">
                    <span className="playerName">{props.player.name}</span>
                    <span className="playerTeamTitle">{props.teamName.slice(0,3).toUpperCase()} {props.player.role}</span>
                </div>
                <span className="playerPoints"> {props.player.points}</span>
                <span className="playerCredits"> {props.player.credits}</span>
            </div>
        </div>
    );
};

export default Player;