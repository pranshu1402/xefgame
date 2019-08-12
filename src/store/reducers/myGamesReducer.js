const initialState = {
    myEnrolledGames: null
}

export const myGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MY_GAMES': return {
            ...state,
            myEnrolledGames: action.payload
        }
        default: return state
    }

}