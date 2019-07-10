import React, { Component } from 'react';
import StepperLayout from '../../hoc/StepperLayout/StepperLayout';
import {Switch, Route} from 'react-router-dom';
import './Matches.css';

class Matches extends Component {
    render() {
        return (
            // stepper
            <div className="stepperContainer">
                <StepperLayout {...this.props}>
                    <Switch>
                        <Route path='/matches/team' render={()=>(<div>team</div>)}/>
                        <Route path='/matches/contest' render={()=>(<div>contests</div>)}/>
                        <Route path='/matches' render={()=>(<div>matches</div>)}/>
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