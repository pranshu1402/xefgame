import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './MatchCard.css';

export default function MatchCard(props) {
    if (props.match !== undefined) {
        return (
            <div onClick={() => props.onClicked(props.match.unique_id)}>
                <Card className={"matchCard" + (props.isFocus?" matchCardFocused":"")}>
                    <CardHeader
                        title={props.match.date} />

                    <CardContent className="matchDetails">

                        <Avatar className="matchTeamAvatar">
                            {props.match["team-1"]}
                        </Avatar>

                        <Typography variant="h6">
                            {props.match.type}
                        </Typography>

                        <Avatar className="matchTeamAvatar">
                            {props.match["team-2"]}
                        </Avatar>

                    </CardContent>
                </Card>
            </div>
        );
    }
    else {
        return <Typography variant="h5">Cannot find Any matches at the moment!!</Typography>;
    }
}
