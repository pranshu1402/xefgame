import * as actions from '../actions/actionTypes';

const initial_state = {
    user: null,
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case actions.AUTH_SUCCESS: return { user: action.userData };
        case actions.AUTH_LOGOUT: return { user: null };
        case actions.AUTH_FAIL: console.log(action.error);
            break;
        default: break;
    }
    return state;
}

export default authReducer;