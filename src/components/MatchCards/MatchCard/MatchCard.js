import React, { Component } from 'react';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import './MatchCard.css';


class DisplayMatch extends Component {

    render() {
        return (
            <div>
                <Card className="contentCard">
                    <CardHeader
                        title="9 July,2019"
                    />
                    <CardContent className="contentBody">

                        <Avatar className="avatar">
                            IND
                        </Avatar>

                        <Typography variant="h6">
                            ODI
                        </Typography>

                        <Avatar className="avatar">
                            AUS
                    </Avatar>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default DisplayMatch;