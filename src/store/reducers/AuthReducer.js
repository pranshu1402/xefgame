const initial_state = {
    user: null,
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS': return { user: action.userData };
        case 'AUTH_LOGOUT': return { user: null };
        case 'AUTH_FAIL': console.log(action.error);
            break;
        default: break;
    }
    return  state;
}

export default authReducer;