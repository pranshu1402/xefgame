import * as actionTypes from '../actions/actionTypes';

const initialState = {
    inputs: { 'photoURL': ['', 'image', true], 'name': ['NAME', 'text', true], 'email': ['EMAIL ID', 'email', false], 'contact': ['91', 'number', true] },
    points: 0,
    edit: null,
}

function setProfileData(state, data) {
    const prevInputs = state.inputs;
    const newInputs = {};

    Object.keys(prevInputs).map(inputKey => {
        if(data[inputKey]!==undefined)
            newInputs[inputKey] = [data[inputKey], prevInputs[inputKey][1], prevInputs[inputKey][2]];
        else
            newInputs[inputKey] = [...prevInputs[inputKey]];            
        return 0;
    });

    return {
        inputs: newInputs,
        points: data.points
    };
}

function editProfile(inputs, data) {
    if (data.value.length !== 0)
        inputs[data.key] = [data.value, inputs[data.key][1], inputs[data.key][2]];
    else
        inputs[data.key] = ['', inputs[data.key][1], inputs[data.key][2]];

    return { inputs, edit: data.key };
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROFILE: return { ...state, ...setProfileData(state, action.profile) };
        case actionTypes.EDIT_TOGGLE: return { ...state, edit: action.editLabel};
        case actionTypes.EDIT_PROFILE: return { ...state, ...editProfile(state.inputs, action) };
        case actionTypes.SET_PROFILE: return { ...state, edit: null };
        default: return state;
    }
}

export default profileReducer;