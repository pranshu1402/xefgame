const initialState = {
    myEnrolledGames: null
}

export const myGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MY_GAMES': return {
            ...state,
            myEnrolledGames: {...state.myEnrolledGames, 
                [action.enrolledGamesKey]: { 
                    matches: action.newEnrolledMatches,
                    teams: action.teamsData}}
        }
        default: return state
    }

}