import React from 'react';


const Tab=(props)=>{
        return (
           <div className={`singleTab ${props.applyClass}`} onClick={()=>props.onChangeTab(props.label)}>
               {props.label}
           </div>
        )
    }
export default Tab;