export const changeTab=(label)=>{
    return {
        type:'CHANGE_TAB',
        changeTab:label
    }
} 

export const changeTabOnGameClick=(data)=>{
    return {
        type:'CHANGE_TAB_GAME_CLICK',
        changeTab:data.label,
        matchToShowOnLeaderboard:data.matchToShowOnLeaderboard
    }
} 