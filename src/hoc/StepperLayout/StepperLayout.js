import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import './StepperLayout.css';

class StepperLayout extends React.Component {
    constructor(props){
        super(props);
        this.props.resetStep();
        this.confirmButtonText = 'confirm';
        this.handleConfirmButton = this.handleNext;
    }

    handleBack = () => {
        this.props.decrementStep();
        this.props.history.goBack();
    }

    handleNext = () => {
        let route = '/matches/' + this.props.routeForStep[this.props.activeStep + 1];
        // this.props.setRedirect(route);
        this.props.incrementStep();
        this.props.history.push(route);
    }

    handleLoginToParticipate = () => {
        this.props.history.push('/matches/auth');
    }

    handleConfirmButtonDisable = ()=>{
        const {activeStep, isMatchSelected, isTeamCompleted, isContestSelected, isSigned} = this.props;
        this.handleConfirmButton = this.handleNext;
        switch(activeStep){
            case 0: this.confirmButtonText = 'Enter';
                    return !isMatchSelected;
            case 1: this.confirmButtonText = 'Confirm';
                    return !isTeamCompleted;
            case 2: if(!isSigned){
                        this.confirmButtonText = 'SignIn to Continue';
                        this.handleConfirmButton = this.handleLoginToParticipate;
                    }else{
                        this.confirmButtonText = 'Participate';
                    }
                    return !isContestSelected;
            default: return false;
        }
    }

    render() {
        return (
            <div className="stepperContainer">
                <Stepper activeStep={this.props.activeStep} alternativeLabel className="stepper">
                    {this.props.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div className="stepperBody">
                {this.props.children}
                </div>
                
                <div className="stepperControls">
                    <Button variant="contained"
                        color="primary"
                        disabled={!this.props.activeStep}
                        onClick={this.handleBack}>
                        Back
                    </Button>
                    <Button variant="contained"
                        color="primary"
                        onClick={this.handleConfirmButton}
                        disabled={this.handleConfirmButtonDisable()}>
                        {this.confirmButtonText}
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return {
        activeStep: state.stepper.activeStep,
        steps: state.stepper.steps,
        routeForStep: state.stepper.routes,
        isSigned: !!state.auth.user,
        isMatchSelected: state.matches.selectedMatchId,
        isTeamCompleted: (state.teams.numPlayers===11),
        isContestSelected: state.contest.selectedContest
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        incrementStep: ()=> dispatch({type:'INCREMENT_ACTIVE_STEP'}),
        decrementStep: ()=> dispatch({type:'DECREMENT_ACTIVE_STEP'}),
        resetStep: ()=> dispatch({type:'RESET_ACTIVE_STEP'}),
        setRedirect: (route)=> dispatch({type: 'AUTH_SET_REDIRECT', redirectTo: route}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StepperLayout);