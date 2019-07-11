import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './MatchCard.css';



function CreateMatch(props) {

        if (props.matchData !== undefined) {
            return (
                <div>
                    <GridList cols={3.4} className="gridList" >
                        {props.matchData.map(tile => (
                            <GridListTile className="gridTile" key={tile}>

                                <Card className="contentCard">
                                    <CardHeader
                                        title={tile.date} />

                                    <CardContent className="contentBody">

                                        <Avatar className="avatar">
                                            {tile["team-1"]}
                                        </Avatar>

                                        <Typography variant="h6">
                                            {tile.type}
                                        </Typography>

                                        <Avatar className="avatar">
                                            {tile["team-2"]}
                                        </Avatar>

                                    </CardContent>
                                </Card>
                            </GridListTile>
                        ))}
                    </GridList>
            
                </div>);
        }
        else {
            return <div>Some Error Occur</div>;
        }
 }

export default CreateMatch;
