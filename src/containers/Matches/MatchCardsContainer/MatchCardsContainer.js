import React, { Component } from 'react';
import Spinner from '../../../components/common/Spinner/Spinner';
import MatchCard from '../../../components/MatchCard/MatchCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { fetchData, fetchTeam } from '../../../store/actions/matchAction';
import { MATCH_SELECTED } from '../../../store/actions/actionTypes';
import { connect } from 'react-redux';
import './MatchCardsContainer.css';
import { loadMyGamesData } from '../../../utility/firebaseOps/getMyGamesData';

class MatchCards extends Component {

    constructor(props) {
        super();
        if(props.isSigned){
            props.fetchGames();
            props.getTheTeams(props.sportSelected);
        }
        props.onReceiveMatchDetails(props.sportSelected);
    }

    render() {
        const {isSigned, isLoading, matchData, myEnrolledGames, sportSelected, selectedMatchId, onMatchCardClicked} = this.props;

        return (
          this.props.isGameLoading ||  isLoading ? <Spinner /> : (
                <div className="matchCardsContainer">
                    <GridList cols={3.4} className="matchCardList">
                        {matchData.map(match => {

                            //handle the case of timeup lock
                            let timemLeftInMatch = new Date(`${match.date} ${match.time}`) - new Date();
                            timemLeftInMatch = timemLeftInMatch / 3600000;

                            //handle the case of betted games
                            let disableMatch=false;
                            if(isSigned && myEnrolledGames){
                                if (myEnrolledGames[sportSelected] !== null&&myEnrolledGames[sportSelected]!==undefined) {
                                     disableMatch = myEnrolledGames[sportSelected].matches
                                        .filter(myEnrolledGame => myEnrolledGame.matchId === match.matchId)
                                }
                            }


                            let isFocus = (selectedMatchId === match.unique_id);
                            return (
                                <GridListTile className="matchCardTile" key={match.unique_id}>
                                    <MatchCard match={match}
                                        isFocus={isFocus}
                                        timesUp={timemLeftInMatch <= 2}
                                        disabled={disableMatch!==undefined?disableMatch.length > 0:false}
                                        onClicked={onMatchCardClicked}
                                        sport={sportSelected} />
                                </GridListTile>
                            )
                        }
                        )}
                    </GridList>
                </div>
            )
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isSigned: !!state.auth.user,
        matchData: state.matches.matchData,
        selectedMatchId: state.matches.selectedMatchId,
        isLoading: state.matches.loading,
        sportSelected: state.sports.sportSelected,
        myEnrolledGames: state.myGames.myEnrolledGames,
        isGameLoading: state.myGames.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveMatchDetails: (sportSelected) => dispatch(fetchData(sportSelected)),
        onMatchCardClicked: (matchId) => dispatch({ type: MATCH_SELECTED, matchId }),
        getTheTeams: (sportSelected) => dispatch(fetchTeam(sportSelected)),
        fetchGames: () => dispatch(loadMyGamesData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchCards);