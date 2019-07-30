import React, { Component } from 'react';
import ContestRowCards from '../../../components/ContestCard/ContestCardRow';
import Spinner from '../../../components/common/Spinner/Spinner';
import PrizeMoneyModal from '../../../components/ContestCard/PrizeMoneyModal';
import * as actions from '../../../store/actions/contestAction'
import { connect } from 'react-redux';
import './ContestCardContainer.css'

class ContestCardContainer extends Component {
    constructor(props){
        super(props);
        console.log(props.activeStep);
        if(props.activeStep!==2){
            props.history.replace(props.routes[props.activeStep]);
        }
    }

    componentDidMount() {
        if(this.props.loading){
            this.props.getContests(this.props.allContests);
        }
    }

    render() {
        const { allContests, loading, isModalOpen, prizeMoneyDist, selectedContest, contestCardClicked} = this.props;

        return (
            <div className="contests">
                <div>
                { loading?<Spinner/>: (
                    Object.keys(allContests).map((contestType, index) => (
                        <div key={index}>
                            <h1 className="contestTypeTag">{contestType}</h1>

                            <ContestRowCards 
                                size={index===0?0:((index*2)+1)} 
                                contests={allContests[contestType]} 
                                clickHandler={contestCardClicked}
                                selectedContest={selectedContest}/>
                        </div>
                    ))
                )}
                </div>
                {isModalOpen ? <PrizeMoneyModal prizeMoneyDist={prizeMoneyDist}/>:null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.contest.isModalOpen,
        prizeMoneyDist: state.contest.prizeMoneyDist,
        allContests: state.contest.contests,
        loading: state.contest.loading,
        selectedContest: state.contest.selectedContest,
        activeStep: state.stepper.activeStep,
        routes: state.stepper.routes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContests: (contests) => dispatch(actions.getContests(contests)),
        contestCardClicked: (contestDetails)=> dispatch({type: 'SELECT_CONTEST', contestDetails})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestCardContainer);