import React from 'react';
import Paper from '@material-ui/core/Paper';

const Players = (props) => {
    return (
        <Paper>
            {props.playersData.map(player=> console.log(player))}
        </Paper>
    );
};

export default Players;