import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import StepperReducer from './StepperReducer';
import MatchReducer from './matchReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer,
    matches:MatchReducer
});

export default rootReducer;