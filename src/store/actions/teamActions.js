import * as actionTypes from './actionTypes';

function setCurrentTypePlayers(){
    return {type: actionTypes}    
}

export const changeTypeHandler = (playerType)=>{
    return dispatch => {
        dispatch({type: actionTypes.CHANGE_PLAYER_TYPE, playerType});
        dispatch(setCurrentTypePlayers());
    }
}