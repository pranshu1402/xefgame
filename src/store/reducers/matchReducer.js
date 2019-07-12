const initialState = {
    matchData: []
};


const matchReducer = (state =initialState, action) => {
    switch (action.type) {
        case 'ADD_MATCHES': return {matchData:action.payload }
        case 'MATCH_REQUEST_FAILED':return state;
        default: return state;
    }
}

export default matchReducer;