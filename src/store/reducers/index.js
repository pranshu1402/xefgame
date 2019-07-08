const initial_state = {
    user: null,
}

const reducer = (state=initial_state, action) => {
    switch(action.type){
        case 'SET_USERDATA': return {user: action.userData};
        case 'RESET_USERDATA': return {user: null};
        default: return state;
    }
}

export default reducer;