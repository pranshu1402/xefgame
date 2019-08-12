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
        default:return state;    
    }
}

export default landingPageReducer;