import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import './StepperLayout.css';

class StepperLayout extends React.Component {

    handleBack = () => {
        let route = '/matches/';
        route+= this.props.routeForStep[this.props.activeStep-1];
        this.props.decrementStep();
        this.props.history.replace(route);
    }

    handleNext = () => {
        let route = '/matches/';
        route+= this.props.routeForStep[this.props.activeStep + 1];
        console.log(route);
        this.props.incrementStep();
        this.props.history.replace(route);
    }

    handleConfirmButtonDisable = ()=>{
        switch(this.props.activeStep){
            case 1: return !this.props.isMatchSelected;
            case 2: return !!this.props.isTeamCompleted;
            case 3: return !!this.props.isContestSelected;
            default: return false;
        }
    }

    render() {
        return (
            // {this.state.activeStep===steps.length? <Redirect to=''/>}
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
                        onClick={this.handleNext}
                        disabled={!this.props.isMatchSelected}>
                        {this.props.activeStep === this.props.steps.length - 1 ? 'Finish' : 'Confirm'}
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
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        incrementStep: ()=> dispatch({type:'INCREMENT_ACTIVE_STEP'}),
        decrementStep: ()=> dispatch({type:'DECREMENT_ACTIVE_STEP'}),
        resetStep: ()=> dispatch({type:'RESET_ACTIVE_STEP'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StepperLayout);