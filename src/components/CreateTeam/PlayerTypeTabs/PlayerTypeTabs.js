import React from 'react';
import Paper from '@material-ui/core/Paper';
import './PlayerTypeTabs.css';

const PlayerTypeTabs = (props) => {
    const playerTypes = ['WK', 'BAT', 'AR', 'BOWL'];

    return (
        <div className="playerTypeTabContainer">
            {playerTypes.map((playerType, index)=> (
                <Paper className={"playerTypeTab" + (props.currentType===playerType?" activeTypeTab":"")}
                     key={index}
                     onClick={()=>props.onChangeType(playerType)}>
                    {playerType}
                </Paper>
                )
            )}
        </div>
    )
};

export default PlayerTypeTabs;