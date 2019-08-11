import React, { Component } from 'react';
import { betFoosBallData } from '../../../assets/dummyData/betDummyData';
import BetCard from '../../../components/Bet/BetCard';
import './BettingContainer.css';

class Bet extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected : ''
        }
    }

    betCardSelectHandler = (teamName) => {
        if(this.state.selected===teamName){
            this.setState({
                selected : ''
            });
        }else{
            this.setState({
                selected : teamName
            });
        }
    }

    render() {
        const betDummyData = betFoosBallData;
        return (
            <div className="bettingCardsContainer">
                <div className="betTeamCards">
                    {
                        betDummyData.map((data, index) => (
                            <BetCard 
                                    key={index}
                                    teamData={data} 
                                    clickHandler={this.betCardSelectHandler}
                                    selected={this.state.selected===data.teamName}
                                    />
                        )
                    )}
                </div>
                <div className="betBoxesContainer">
                    <div className="betBox">
                        <label>BET:</label>
                        <input type ="number" 
                           id="inputBetBox" 
                           placeholder="100" />
                    </div>
                    <div className="winChanceBox">
                        <label>WIN:</label>
                        <input type ="number" 
                           id="outputBetBox" 
                           placeholder="100" />
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         teams: state.matches.matchData.teams,
//     }
// };

export default Bet;