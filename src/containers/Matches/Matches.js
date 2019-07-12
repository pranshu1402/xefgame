import React, { Component } from 'react';
import StepperLayout from '../../hoc/StepperLayout/StepperLayout';
import MatchCards from './MatchCardsContainer/MatchCardsContainer';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class Matches extends Component {
    render() {
        return (
                <StepperLayout {...this.props} isMatchSelected={this.props.matchSelected}>
                    <Switch>
                        <Route path='/matches/team' render={()=>(<div>Create your team</div>)}/>
                        <Route path='/matches/contest' render={()=>(<div>Enter in a contest</div>)}/>
                        <Route path='/matches' component={MatchCards}/>
                    </Switch>
                </StepperLayout>
        );
    }
}

const mapStateToProps = state =>{
    return {
        matchSelected : state.matches.selectedMatchId,
    }
}


export default connect(mapStateToProps)(Matches);