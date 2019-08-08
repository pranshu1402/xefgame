import React from 'react';
import './PrizeRow.css';
import { sortPMD } from '../../utility/sort';

function PrizeRow(props) {

    return (   
        sortPMD(props.prizeMoneyDist).map(prizeMoneyCategory=> {
            return (
                <div>
                    <div className="prizeRow">
                        <p >{`Rank ${prizeMoneyCategory[0]}:`}</p>
                        <p>{prizeMoneyCategory[1]}</p>
                    </div>
                    <hr className="rankSeparator"></hr>
                </div>
            )
        })
    )
}

export default PrizeRow;