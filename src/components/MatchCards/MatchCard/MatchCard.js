import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './MatchCard.css';


class DisplayMatch extends Component {

    constructor(props) {
        super(props);
        this.dummyData = [
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            },
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            },
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            },
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            }
            ,
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            },
            ,
            {
                "title": "9 July,2019",
                "teamA": "IND",
                "teamB": "AUS"
            }
        ];
    }

    render() {
        return (
            <div>
                <GridList cols={3.4} className="gridList" >
                    {this.dummyData.map(tile => (
                        <GridListTile className="gridTile" key={tile}>
                           
                            <Card className="contentCard">
                                <CardHeader
                                    title={tile.title} />

                                <CardContent className="contentBody">

                                    <Avatar className="avatar">
                                        {tile.teamA}
                                    </Avatar>

                                    <Typography variant="h6">
                                        ODI
                                    </Typography>

                                    <Avatar className="avatar">
                                        {tile.teamB}
                                    </Avatar>

                                </CardContent>
                            </Card>
                        </GridListTile>
                    ))}
                </GridList>

            </div>
        );
    }
}

export default DisplayMatch;