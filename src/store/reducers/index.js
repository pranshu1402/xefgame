import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import StepperReducer from './stepperReducer';
import MatchReducer from './matchReducer';
import TeamsReducer from './teamsReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer,
    matches:MatchReducer,
    teams: TeamsReducer
});

export default rootReducer;