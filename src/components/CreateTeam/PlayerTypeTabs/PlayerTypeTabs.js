import React from 'react';
import Paper from '@material-ui/core/Paper';
import './PlayerTypeTabs.css';

const PlayerTypeTabs = () => {
    const playerTypes = ['WK', 'BAT', 'AR', 'BOWL'];

    return (
        <Paper className="playerTypeTabContainer">
            {playerTypes.map(playerType=> (
                <div className="playerTypeTab">
                    {playerType}
                </div>
                )
            )}
        </Paper>
    )
};

export default PlayerTypeTabs;