import React, { Component } from 'react';
import { betDummyData } from '../../assets/dummyData/betDummyData';
import BetCard from './BetCard';
import './Bet.css';

class Bet extends Component {

    render() {
        return (
            <div className="rootBet">
                <div className="betCardGrid">
                    {
                        betDummyData.map((data, index) => <BetCard teamData={data} key={index} />)
                    }
                </div>
                <div className="betBox">
                    <label>Bet:</label>
                    <input type ="number" className="inputBetBox" placeholder="00000" />
                </div>
            </div>
        );
    }
}

export default Bet;