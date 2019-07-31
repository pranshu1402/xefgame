import * as actionTypes from '../actions/actionTypes';

const initialState = {
    inputs: { 'photoURL': ['', 'image', true], 'name': ['NAME', 'text', true], 'contact': ['91', 'number', true], 'email': ['EMAIL ID', 'email', false], },
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
    const newInputs = {...inputs};
    if (data.value.length !== 0)
        newInputs[data.key] = [''+data.value, inputs[data.key][1], inputs[data.key][2]];
    else
        newInputs[data.key] = ['', inputs[data.key][1], inputs[data.key][2]];

    return { inputs: newInputs, edit: data.key };
}

function toggleEditLabel(prevLabel, currLabel){
    if(prevLabel===null){
        return currLabel;
    }else if(prevLabel===currLabel){
        return null;
    }else{
        return currLabel;
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROFILE: return { ...state, ...setProfileData(state, action.profile) };
        case actionTypes.EDIT_TOGGLE: return { ...state, edit: toggleEditLabel(state.edit,action.editLabel)};
        case actionTypes.EDIT_PROFILE: return { ...state, ...editProfile(state.inputs, action) };
        case actionTypes.SET_PROFILE: return { ...state, edit: null };
        default: return state;
    }
}

export default profileReducer;