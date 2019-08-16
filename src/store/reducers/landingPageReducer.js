const initialState = {
    sportSelected: ""
}

const landingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case  'SPORT_SELECTED':
            return {
                ...state,
                sportSelected:action.sportSelected
            }
        case 'AUTH_LOGOUT': return initialState;
        default:return state;    
    }
}

export default landingPageReducer;