const initialState = {
    Matches: []
};


const matchReducer = (state =initialState, action) => {
    switch (action.type) {
        case 'ADD_MATCHES': return {Matches:action.payload }
        case 'MATCH_REQUEST_FAILED':return state;
        default: return state;
    }
}

export default matchReducer;