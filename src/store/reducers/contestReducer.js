const initialState = {
    isModalOpen: false,
    prizeMoneyDist: {},
    contests: {'hotContests':[], 'headToHead': [], 'megaContest':[] },
    loading: true,
    selectedContest: null,
}

function addContest(contests, contestType, contestsData){
    let newContests = {...contests};
    newContests[contestType] = contestsData;
    return newContests;
}

function checkSelected(prevSelected, currSelected){
    if(!prevSelected || prevSelected.id!==currSelected.id){
        return currSelected;
    }else{
        return null;
    }
}

const contestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_MODAL_OPEN': return {
            ...state, 
            isModalOpen: action.isModalOpen
        };
        case 'ADD_PRIZE_DIST': return {
            ...state, 
            prizeMoneyDist: action.prizeMoneyDist
        };
        case 'ADD_CONTESTS': return {
            ...state, 
            contests: addContest(state.contests, action.contestType, action.contestsData)
        };
        case 'ADD_CONTESTS_SUCCESSFUL': return {
            ...state,
            selectedContest: null,
            loading: false
        }
        case 'SELECT_CONTEST': return {
            ...state,
            selectedContest: checkSelected(state.selectedContest, action.contestDetails)
        }
        case 'AUTH_LOGOUT': return initialState;
        case 'MATCH_SELECTED': return initialState;
        default: return state;
    }
}

export default contestReducer;