import React, { Component } from 'react';
import TeamInfo from '../../../components/CreateTeam/TeamInfoBar/TeamInfo';
import PlayerTypeTabs from '../../../components/CreateTeam/PlayerTypeTabs/PlayerTypeTabs';
import Spinner from '../../../components/common/Spinner/Spinner';
import Players from '../../../components/CreateTeam/Players/Players';
import * as actions from '../../../store/actions/teamActions';
import { connect } from 'react-redux';
import './CreateTeamContainer.css';

class CreateTeamContainer extends Component {
    constructor(props) {
        super(props);
        if (this.props.matchUniqueId === 0) {
            this.props.history.replace('/matches');
        }
        this.props.fetchPlayerData(this.props.matchUniqueId);
    }

    render() {
        const { playersData, credits, numPlayers, teamsPlayerCounter, onChangeType, currentPlayersRole, loading, selectedPlayers, onSelectPlayer, types} = this.props;

        return (
            <div className="createTeamContainer">
                <TeamInfo numPlayers={numPlayers}
                    teams={teamsPlayerCounter}
                    credits={credits} />
                <PlayerTypeTabs onChangeType={onChangeType} currentType={currentPlayersRole} />
                {loading ? <Spinner /> : (<Players  playersData={playersData}
                                                    currentPlayersType={currentPlayersRole}
                                                    selectedPlayersId={selectedPlayers}
                                                    selectHandler={onSelectPlayer}
                                                    teamsPlayerCounter={teamsPlayerCounter}
                                                    numPlayers={numPlayers}
                                                    typesData={types} /> )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { playersData, credits, numPlayers, currentPlayersRole, teamsPlayerCounter, loading, selectedPlayers, types } = state.teams;
    return {
        matchUniqueId: state.matches.selectedMatchId,
        playersData,
        credits,
        numPlayers,
        currentPlayersRole,
        teamsPlayerCounter,
        loading,
        selectedPlayers,
        types
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPlayerData: (matchId) => dispatch(actions.fetchPlayerData(matchId)),
        onChangeType: (playerRole) => dispatch(actions.changeTypeHandler(playerRole)),
        onSelectPlayer: (playerDetails, teamName) => dispatch(actions.selectPlayer(playerDetails, teamName)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamContainer);