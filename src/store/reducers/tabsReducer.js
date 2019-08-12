const initialState = {
    selectedTab: "MY GAMES",
    matchToShowOnLeaderboard:null
}

export const tabsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TAB':
            return {
                ...state,
                selectedTab: action.changeTab,
            }
            case 'CHANGE_TAB_GAME_CLICK':
                    return {
                        ...state,
                        selectedTab: action.changeTab,
                        matchToShowOnLeaderboard:action.matchToShowOnLeaderboard
                    }
        default: return state;
    }
}