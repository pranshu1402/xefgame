import React, { Component } from 'react';
import TeamInfo from '../../../components/CreateTeam/TeamInfoBar/TeamInfo';
import PlayerTypeTabs from '../../../components/CreateTeam/PlayerTypeTabs/PlayerTypeTabs';
import Players from '../../../components/CreateTeam/Players/Players';
import * as actions from '../../../store/actions/teamActions';
import { connect } from 'react-redux';

class CreateTeamContainer extends Component {
    
    render() {
        const {playersData, credits, numPlayers, teams, onChangeType, playerTypeDisplay} = this.props;

        return (
            <div>
                <TeamInfo numPlayers={numPlayers}
                          teams={teams}
                          credits={credits}/>
                <PlayerTypeTabs onChangeType={onChangeType} playerTypeDisplay={playerTypeDisplay}/>
                <Players playersData={playersData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {playersData, credits, numPlayers, teams, playerTypeDisplay} = state.teams;
    return {
        playersData,
        credits,
        numPlayers,
        teams,
        playerTypeDisplay 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeType: (playerType)=> dispatch(actions.changeTypeHandler(playerType)),
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateTeamContainer);