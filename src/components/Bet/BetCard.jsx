import React from 'react';
import './BetCard.css';
import faker from 'faker';

const BetCard = (props) => {
    const activeClassName = props.selected?" activeBetTeamCard":"";
    
    const players = (
        <div className="betTeamPlayers">
            {props.teamData.players.map( (player, index) => (
                <div className="playerListLabel"
                     key={index}>
                    <div className="labelPlayer">{player.name}</div>
                    {/* <div className="labelRole">{player.role}</div> */}
                    <div className="labelRating">{player.rating}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={"betTeamCard"+ activeClassName}
             onClick={()=> props.clickHandler(props.teamData.teamName)}>
            <div className="betTeamDetails">
                <img alt="thumbnail" src={faker.image.sports()}/>
                <span>{props.teamData.teamName}</span>
                <p>Team Rating: {props.teamData.teamRating}</p>
            </div>
            <div className="playerLabels">  
                    {/* <div className="playerAvatarLabel">
                    </div> */}
                    <div className="playerListLabel">
                        <div className="labelPlayer">Player</div>
                        {/* <div className="labelRole">Role</div> */}
                        <div className="labelRating">Rating</div>
                    </div>
            </div>
            {players}
        </div>
    );
}

export default BetCard;