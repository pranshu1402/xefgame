const initialState = {
    isModalOpen: false,
    prizeMoneyDist: {},
    hotContests: [],
    megaContest: [],
    headToHead: []
}


const contestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_MODAL_OPEN': return {
            ...state,
            isModalOpen: action.isModalOpen
        }
        case 'ADD_PRIZE_DIST': return {
            ...state,
            prizeMoneyDist: action.prizeMoneyDist

        }
        case 'ADD_HOT_CONTESTS': return {
            ...state,
            hotContests: action.hotContests

        }
        case 'ADD_MEGA_CONTESTS': return {
            ...state,
            megaContest: action.megaContest

        }
        case 'ADD_HEAD_CONTESTS': return {
            ...state,
         headToHead: action.headToHead

        }
        default: return state;
    }
}

export default contestReducer;