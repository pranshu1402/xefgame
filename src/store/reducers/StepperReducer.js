const initialState = {
    activeStep: 0,
    steps: ['Choose Match', 'Create Team', 'Join Contest'],
    routes: ['matches','team','contest','participate']
}

function changeActiveStep(state,value){
    return {...state , activeStep: state.activeStep+value};
}

const stepperReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'INCREMENT_ACTIVE_STEP': return changeActiveStep(state, +1);
        case 'DECREMENT_ACTIVE_STEP': return changeActiveStep(state, -1);
        case 'RESET_ACTIVE_STEP': return initialState;
        default: return state;
    }
}

export default stepperReducer;