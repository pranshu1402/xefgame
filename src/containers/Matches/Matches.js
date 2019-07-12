import React, { Component } from 'react';
import StepperLayout from '../../hoc/StepperLayout/StepperLayout';
import {Switch, Route} from 'react-router-dom';
import MatchCards from '../../components/MatchCards/MatchCards';
import './Matches.css';

class Matches extends Component {
    render() {
        return (
            // stepper
            <div className="stepperContainer">
                <StepperLayout {...this.props}>
                    <Switch>
                        <Route path='/matches/team' component={MatchCards}/>
                        <Route path='/matches/contest' render={()=>(<div>contests</div>)}/>
                        <Route path='/matches' component={MatchCards}/>
                    </Switch>
                    <div>
                        match
                    </div>
                </StepperLayout>
            </div>
            // route
            // matches
            // players selection
            // contests participation
        );
    }
}

export default Matches;