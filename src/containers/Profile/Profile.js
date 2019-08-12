import React, { Component } from 'react';
import EditInput from '../../components/common/EditInput/EditInput';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/profileActions';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        props.fetchFormData(props.userData);
    }

    componentDidUpdate() {
        const { editLabel } = this.props;
        if ((editLabel !== null && editLabel !== 'photoURL')) {
            document.getElementById(editLabel).focus();
        }
    }

    resetChanges = () => {
        this.props.fetchFormData(this.props.userData);
    }

    render() {

        let formElements = [];
        const { inputs, editLabel, toggleEditHandler, inputEditHandler, submitHandler } = this.props;
        let disableIconButton = false;

        for (let inputKey in inputs) {
            formElements.push(
                <EditInput key={inputKey}
                    label={inputKey}
                    value={inputs[inputKey][0]}
                    type={inputs[inputKey][1]}
                    editLabel={editLabel}
                    changeHandler={inputEditHandler}
                    childClassName="editButton">
                    {disableIconButton = (inputs[inputKey][1] === "email") ? true : false}
                    <IconButton color="secondary"
                        aria-label="editInput"
                        disabled={disableIconButton}
                        onClick={() => toggleEditHandler(inputKey)}>
                        <EditIcon fontSize='small' />
                    </IconButton>

                </EditInput>
            );
        }

        return (
            <div className="profileContainer">
                <form onSubmit={submitHandler} className="profileElements">
                    {formElements}
                    <button type="submit"
                        value="Submit"
                        className="profileButton">
                        Save
                    </button>
                    <button onClick={this.resetChanges}
                        className="profileButton">
                        Cancel
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
        userData: state.auth.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFormData: (userData) => dispatch(actions.fetchFormData(userData)),
        submitHandler: () => dispatch(actions.submitForm()),
        inputEditHandler: (event) => dispatch(actions.editFormInput(event)),
        toggleEditHandler: (editLabel) => dispatch(actions.editToggle(editLabel)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);