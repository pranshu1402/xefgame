import * as actionTypes from './actionTypes';

export const fetchFormData = (user) => {
    return {
        type: actionTypes.GET_PROFILE,
        profile: user,
    };
}

export const editToggle = (editLabel) => {    
    return {
        type: actionTypes.EDIT_TOGGLE,
        editLabel
    }
}

export const editFormInput = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    return {
        type: actionTypes.EDIT_PROFILE,
        key,
        value
    }
}

export const submitForm = (inputs) => {
    // set player data online

    return {
        type: actionTypes.SET_PROFILE
    }
}