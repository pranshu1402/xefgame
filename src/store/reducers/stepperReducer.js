import * as actions from '../actions/actionTypes';

const stepData = {
    'other': {
        steps: ['Choose Match', 'Choose Team'],
        routes: ['matches', 'bet', 'participate'],
    },
    'cricket':{
        steps: ['Choose Match', 'Create Team', 'Join Contest'],
        routes: ['matches', 'team', 'contest', 'participate']    
    }
}

const initialState = {
    activeStep: 0,
    steps: ['Choose Match', 'Create Team', 'Join Contest'],
    routes: ['matches', 'team', 'contest', 'participate']
}

function changeActiveStep(state, value) {
    return { ...state, activeStep: state.activeStep + value };
}

const stepperReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT_ACTIVE_STEP: return changeActiveStep(state, +1);
        case actions.DECREMENT_ACTIVE_STEP: return changeActiveStep(state, -1);
        case actions.SET_OTHER_STEPS: return {
            ...initialState,
            steps: stepData[action.stepsType].steps,
            routes: stepData[action.stepsType].routes
        }
        case actions.RESET_ACTIVE_STEP: return initialState;
        case actions.AUTH_LOGOUT: return initialState;
        default: return state;
    }
}

export default stepperReducer;