import React, { Component } from 'react';
import Spinner from '../../../components/common/Spinner/Spinner';
import MatchCard from '../../../components/MatchCard/MatchCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { fetchData } from '../../../store/actions/matchAction';
import {MATCH_SELECTED} from '../../../store/actions/actionTypes';
import { connect } from 'react-redux';
import './MatchCardsContainer.css';

class MatchCards extends Component {

    componentDidMount() {
        this.props.onReceiveMatchDetails(this.props.sportSelected);
    }

    render() {
        return (
            this.props.isLoading? <Spinner/>: (
            <div className="matchCardsContainer">
                <GridList cols={3.4} className="matchCardList">
                    {this.props.matchData.map(match => {
                        let isFocus = (this.props.selectedMatchId===match.unique_id);
                        return (
                            <GridListTile className="matchCardTile" key={match.unique_id}>
                                <MatchCard match={match} isFocus={isFocus} 
                                        onClicked={this.props.onMatchCardClicked}/>
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
        sportSelected:state.landingPage.sportSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveMatchDetails: (sportSelected) => dispatch(fetchData(sportSelected)),
        onMatchCardClicked: (matchId) => dispatch({type: MATCH_SELECTED, matchId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchCards);