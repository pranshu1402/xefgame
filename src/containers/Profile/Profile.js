import React, { Component } from 'react';
import EditInput from '../../components/common/EditInput/EditInput';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/profileActions';
import './Profile.css';

class Profile extends Component {

    constructor(props){
        super(props);
        props.fetchFormData(props.userId); 
    }

    componentDidMount(){
        const {editLabel} = this.props;
        if((editLabel!==null && editLabel!=='image')){
            console.log(document.getElementById(editLabel));
            document.getElementById(editLabel).focus();
        }
    }

    render() {
        let formElements = [];
        const {inputs, editLabel, toggleEditHandler, inputEditHandler, submitHandler} = this.props;

        for(let inputKey in inputs){
            formElements.push(<EditInput key={inputKey}
                                         label={inputKey}
                                         value={inputs[inputKey][0]}
                                         type={inputs[inputKey][1]}
                                         editLabel={editLabel}
                                         changeHandler={inputEditHandler}
                                         childClassName="editButton">
                                    <IconButton color="secondary" 
                                                aria-label="editInput" 
                                                onClick={()=>toggleEditHandler(inputKey)}>
                                            <EditIcon fontSize='small'/>
                                    </IconButton>
                              </EditInput>
            );
        }

        return (
            <div className="profileContainer">
                <form onSubmit={submitHandler} className="profileElements">
                    {formElements}
                    <button type="submit" 
                            value="Submit">
                                Submit
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputs: state.profile.inputs,
        editLabel: state.profile.edit,
        avatar: state.profile.avatar,
        userId: state.auth.user.uid,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFormData: (userId)=> dispatch(actions.fetchFormData(userId)),
        submitHandler: ()=> dispatch(actions.submitForm()),
        inputEditHandler: (event)=> dispatch(actions.editFormInput(event)),
        toggleEditHandler: (editLabel)=> dispatch(actions.editToggle(editLabel)),
    };
}

export default connect( mapStateToProps, mapDispatchToProps)(Profile);