import React from 'react';
import './BetCard.css';
import fakeImg from '../../assets/images/download.jpeg';

const BetCard = (props) => {


    return (

        <div className="betCardItem">
            <div className="betCardAvatar">
                <img alt="thumbnail" src={fakeImg}/>
            </div>
            <div className="betCardDetails">
                <div>Team/Player:<span>{props.teamData.team}</span></div>
                <div>Rating:<span>{props.teamData.rating}</span></div>
                <div>Betting price:<span>{props.teamData.bettingPrice} For 100</span></div>
            </div>

        </div>
    );
}

export default BetCard;