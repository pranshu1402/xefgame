import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import StepperReducer from './StepperReducer';
import MatchReducer from './matchReducer';
import TeamsReducer from './TeamsReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer,
    matches:MatchReducer,
    teams: TeamsReducer
});

export default rootReducer;