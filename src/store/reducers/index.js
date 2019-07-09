import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import StepperReducer from './StepperReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    stepper: StepperReducer
});

export default rootReducer;