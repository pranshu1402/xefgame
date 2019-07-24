import React from 'react';
import './PrizeRow.css';

function PrizeRow(props) {

    return (
        Object.keys(props.prizeMoneyDist).map(key => {
            return (
                <div>
                    <div className="prizeRow">
                        <p >{`Rank ${key}:`}</p>
                        <p>{props.prizeMoneyDist[key]}</p>
                    </div>
                    <hr className="rankSeparator"></hr>
                </div>
            )
        })
    )
}

export default PrizeRow;