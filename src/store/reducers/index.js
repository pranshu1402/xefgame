import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import StepperReducer from './StepperReducer';
import MatchReducer from './matchReducer';
import ContestReducer from './contestReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer,
    matches:MatchReducer,
    contest:ContestReducer
});

export default rootReducer;