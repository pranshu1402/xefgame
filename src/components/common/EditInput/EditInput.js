import React from 'react';

function EditInput(props) {
    return (
        <div className="profileInputBox">
            {
             props.type==='image'?
                <img src={props.value} className="profilePic" alt="Profile Pic"/>:
                <input id={props.label}
                   className="profileInput"
                   type={props.type}
                   placeholder={props.label}
                   value={props.value}
                   //disabled={props.editLabel!==props.label}
                   onChange={props.changeHandler}/>
            }
            <span className={props.childClassName}>{props.children}</span>
        </div>
    );
}

export default EditInput;