import React, { Component } from 'react';
import { betFoosBallData, betCarromData, betTableTennisData } from '../../../assets/dummyData/betDummyData';
import BetCard from '../../../components/Bet/BetCard';
import {connect} from 'react-redux';
import './BettingContainer.css';

class Bet extends Component {

    constructor(props) {
        super(props);
        if (this.props.matchUniqueId === 0) {
            this.props.history.replace('/matches');
        }
        // props.setAllTeams(props.teamData);
    }

    betCardSelectHandler = (teamName) => {
        if(this.props.selected===teamName){
            this.props.onSelectTeamCard('');
        }else{
            this.props.onSelectTeamCard(teamName);
        }
    }

    betHandler = (event)=>{
        this.props.onChangeBetAmount(event.target.value);
    }

    render() {
        let betDummyData;
        switch (this.props.sportName) {
            case 'Carrom': betDummyData= betCarromData;
                break;
            case 'FoosBall': betDummyData= betFoosBallData;
                break;
            case 'TableTennis': betDummyData= betTableTennisData;
                break;
            default: betDummyData= null;
        }

        return (
            <div className="bettingCardsContainer">
                <div className="betTeamCards">
                    {
                        betDummyData.map((data, index) => (
                            <BetCard 
                                    key={index}
                                    teamData={data} 
                                    clickHandler={this.betCardSelectHandler}
                                    selected={this.props.selected===data.teamName}
                                    />
                        )
                    )}
                </div>
                <div className="betBoxesContainer">
                    <div className="betBox">
                        <label>BET:</label>
                        <input type ="number" 
                           id="inputBetBox" 
                           placeholder="100"
                           onChange={this.betHandler}
                           disabled={this.props.selected===''} />
                    </div>
                    <div className="winChanceBox">
                        <label>WIN:</label>
                        <input type ="number" 
                           id="outputBetBox" 
                           placeholder={this.props.winAmount}
                           disabled={true} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teams: state.bet.teams,
        // teamData: state.matches.matchData.teams,
        selected: state.bet.selected,
        winAmount: state.bet.winAmount,
        matchUniqueId: state.matches.selectedMatchId,
        sportName: state.sports.sportSelected
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onSelectTeamCard: (selectTeam) => dispatch({type: 'SELECT_BET_TEAM', selectTeam}),
        setAllTeams: (teamData) => dispatch({type: 'SET_ALL_TEAMS', teamData}),
        onChangeBetAmount: (betAmount) => dispatch({type: 'SET_BET_AMOUNT', betAmount})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bet);