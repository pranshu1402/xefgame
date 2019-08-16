const initialState = {
    myEnrolledGames: null,
    loading: true,
    isUserEnrolled:false
}

export const myGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MY_GAMES': return {
            ...state,
            loading: false,
            isUserEnrolled:true,
            myEnrolledGames: {
                ...state.myEnrolledGames,
                [action.enrolledGamesKey]: {
                    matches: action.newEnrolledMatches,
                    teams: action.teamsData
                }
            }
        }
        case 'GAMES_NOT_FOUND': return {
            ...state,
            loading: false
        }
        case 'AUTH_LOGOUT': return initialState;
        default: return state
    }

}