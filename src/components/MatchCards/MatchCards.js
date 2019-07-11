import React, { Component } from "react";



import CreateMatch from './MatchCard/CreateMatchCard';
import { fetchData } from '../../store/actions/matchAction';

import { connect } from 'react-redux';

class DisplayMatchCards extends Component {

    componentDidMount() {
        this.props.onReceiveMatchDetails();
    }
    render() {
        return (
            <CreateMatch matchData={this.props.Matches}></CreateMatch>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        Matches: state.matches.Matches
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveMatchDetails: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayMatchCards);
