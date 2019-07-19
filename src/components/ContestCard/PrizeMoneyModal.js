import React, { Component } from 'react';

import './PrizeMoneyModal.css';
import PrizeRow from './PrizeRow';
import { isModalOpen } from '../../store/actions/contestAction';

import { connect } from 'react-redux';

class PrizeMoneyModal extends Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);

    }

    closeModal() {
        this.props.onCloseModal(false);
    }

    render() {
        return (
            <div className="backdrop">
                <div className="prizeMoneyModal" >
                <div className="modalScroller">
                    <span onClick={this.closeModal} className="closeModal">&times;</span>
                    <h3 className="modalHeader">Prize Breakup</h3>
                    <h6 className="modalPrizeTag">prize pool</h6>
                    <h3 className="modalPrize">50000</h3>
                    <PrizeRow prizeMoneyDist={this.props.prizeMoneyDist}></PrizeRow>
                </div>

                </div>
            </div>
            
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal: (flag) => dispatch(isModalOpen(flag))
    }
}

export default connect(null, mapDispatchToProps)(PrizeMoneyModal);