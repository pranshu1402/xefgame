import firebase from 'firebase/app';
import 'firebase/firestore';
import * as actionTypes from './actionTypes';


export const fetchFormData = (uid) => {
    return dispatch=> {
        firebase.firestore().collection("users").doc(uid).get()
        .then( doc => {
            if(doc.exists){
                console.log('doc exist with', doc.data());
                dispatch({
                    type: actionTypes.GET_PROFILE,
                    profile: doc.data().profile,
                });
            }else{
                console.log("profile doesn't exist");
            }
        })
        .catch(error=> console.log(error));
    }
}

export const editToggle = (editLabel) => {    
    const docNode = document.getElementById(editLabel).focus;

    return {
        type: actionTypes.EDIT_TOGGLE,
        editLabel,
        docNode
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