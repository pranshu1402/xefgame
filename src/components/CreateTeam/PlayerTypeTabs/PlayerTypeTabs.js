import React from 'react';
import Paper from '@material-ui/core/Paper';
import './PlayerTypeTabs.css';

function getPlayerTypeClassName(currentType, playerType, typeData) {
    let classname = "playerTypeTab ";
    if (currentType === playerType) {
        classname += "currentTypeTab ";
    }

    if (typeData[0] === typeData[2]) {
        classname += "maxSelectedTypeTab";
    }

    return classname;
}

const PlayerTypeTabs = (props) => {
    const { playerTypes: typesData, currentType } = props;

    return (
        <div className="playerTypeTabContainer">
            {Object.keys(typesData).map((playerType, index) => {
                const classname = getPlayerTypeClassName(currentType, playerType, typesData[playerType]);
                return (
                    <Paper  className={classname}
                            key={index}
                            onClick={() => props.onChangeType(playerType)}>
                        {playerType}
                        <div className="counter">({typesData[playerType][0]})</div>
                    </Paper>
                )
            }
            )}
        </div>
    )
};

export default PlayerTypeTabs;