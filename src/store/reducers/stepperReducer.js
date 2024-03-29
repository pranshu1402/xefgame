import * as actions from '../actions/actionTypes';

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
        case actions.RESET_ACTIVE_STEP: return initialState;
        case actions.AUTH_LOGOUT: return initialState;
        default: return state;
    }
}

export default stepperReducer;