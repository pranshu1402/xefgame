import * as actions from '../actions/actionTypes';

const initialState = {
    matchData: [],
    selectedMatchId: 0,
    loading: true,
};

function checkSelectedMatchId(state, newSelectedmatchId){
    const previousMatchId = state.selectedMatchId;
    if(previousMatchId=== newSelectedmatchId){
        return {...state, selectedMatchId: 0};
    }
    else return {...state, selectedMatchId: newSelectedmatchId};
}

const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_MATCHES: return { ...state, loading: false, matchData: action.payload };
        case actions.MATCH_REQUEST_FAILED: return state;
        case actions.MATCH_SELECTED: return checkSelectedMatchId(state, action.matchId);
        case actions.AUTH_LOGOUT: return initialState;
        default: return state;
    }
}

export default matchReducer;