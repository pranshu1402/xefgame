import React, { Component } from 'react';
import Spinner from '../../../components/common/Spinner/Spinner';
import MatchCard from '../../../components/MatchCard/MatchCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { fetchData, fetchTeam } from '../../../store/actions/matchAction';
import {MATCH_SELECTED} from '../../../store/actions/actionTypes';
import { connect } from 'react-redux';
import './MatchCardsContainer.css';
import { loadMyGamesData } from '../../../utility/firebaseOps/getMyGamesData';

class MatchCards extends Component {

    constructor(props) {
        super();
        props.fetchGames()
        props.getTheTeams(props.sportSelected);
        props.onReceiveMatchDetails(props.sportSelected);
       
       
        
    }

    render() {
        return (
            this.props.isGameLoading||this.props.isLoading ? <Spinner/> : (
            <div className="matchCardsContainer">
                <GridList cols={3.4} className="matchCardList">
                    {this.props.matchData.map(match => {
                     let disableMatch = this.props.myEnrolledGames[this.props.sportSelected].matches.filter(myEnrolledGame=>myEnrolledGame.matchId===match.matchId);

                     let isFocus = (this.props.selectedMatchId===match.unique_id);
                        return (
                            <GridListTile className="matchCardTile" key={match.unique_id}>
                                <MatchCard match={match} 
                                        isFocus={isFocus} 
                                        disabled={disableMatch.length>0}
                                        onClicked={this.props.onMatchCardClicked}
                                        sport={this.props.sportSelected}/>
                            </GridListTile>          
                        )}
                    )}
            </GridList>
            </div>
            )
        );
    }

}

const mapStateToProps = (state) => {
    return {
        matchData: state.matches.matchData,
        selectedMatchId: state.matches.selectedMatchId,
        isLoading: state.matches.loading,
        sportSelected:state.sports.sportSelected,
        myEnrolledGames:state.myGames.myEnrolledGames,
        isGameLoading:state.myGames.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveMatchDetails: (sportSelected) => dispatch(fetchData(sportSelected)),
        onMatchCardClicked: (matchId) => dispatch({type: MATCH_SELECTED, matchId}),
        getTheTeams:(sportSelected)=>dispatch(fetchTeam(sportSelected)),
        fetchGames: ()=> dispatch(loadMyGamesData()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchCards);