import React, { Fragment } from 'react';
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

    render() {
        return (
            // {this.state.activeStep===steps.length? <Redirect to=''/>}
            <Fragment>
                <Stepper activeStep={this.props.activeStep} alternativeLabel>
                    {this.props.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {this.props.children}
                <div>
                    <Button variant="contained"
                        color="primary"
                        disabled={this.props.activeStep === 0}
                        onClick={this.handleBack}>
                        Back
                </Button>
                    <Button variant="contained"
                        color="primary"
                        onClick={this.handleNext}>
                        {this.props.activeStep === this.props.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </Fragment>
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