import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import StepperReducer from './stepperReducer';
import MatchReducer from './matchReducer';
import TeamsReducer from './teamsReducer';
import ContestReducer from './contestReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer,
    matches:MatchReducer,
    teams: TeamsReducer,
    contest:ContestReducer,
    profile: profileReducer
});

export default rootReducer;