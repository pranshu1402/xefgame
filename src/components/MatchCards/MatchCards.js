import React, { Component } from "react";
import MatchCard from './MatchCard/CreateMatchCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { fetchData } from '../../store/actions/matchAction';
import { connect } from 'react-redux';

class MatchCards extends Component {

    componentDidMount() {
        this.props.onReceiveMatchDetails();
    }

    render() {
        return (
            <div className="matchCardsContainer">
            <GridList cols={3.4} className="gridList" >
                        {   console.log(this.props.matchData)}
                        {    this.props.matchData.map(match => (
                            <GridListTile className="gridTile" key={match.unique_id}>
                                <MatchCard match={match}></MatchCard>
                            </GridListTile>
                        ))}
            </GridList>            
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        matchData : state.matches.matchData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveMatchDetails: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchCards);