import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './MatchCard.css';

export default function MatchCard(props) {
    if (props.match !== undefined) {
        const cardContent = props.sport === 'Cricket' ? (
            <CardContent className="matchContent">
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
        ) : (
            <CardContent className="matchContents">
                <div className="matchDetails">
                    <Typography variant="h6">
                        {props.match.type}
                    </Typography>
                    <Typography variant="h6">
                        | {props.match.venue}
                    </Typography>
                    <Typography variant="h6">
                        , {props.match.time}
                    </Typography>
                </div>
                <div className="matchTeams">
                {props.match.teams.map( team => (
                        <p key={team}>
                            {team}
                        </p>
                        )
                )}
                </div>    
            </CardContent>
            );
         let disableClassName=  props.disabled || props.timesUp? "disableCard":"";
        return (
            <div className={disableClassName}
             onClick={() => props.onClicked(props.match.unique_id)}>
                
                <Card className={"matchCard" + (props.isFocus ? " matchCardFocused" : "")}>
                    <CardHeader
                        title={props.match.date} />
                         {props.disabled?<span className="betted">Betted</span>:undefined}
                         {props.timesUp && !props.disabled?<span className="betted timesUp">TimesUp</span>:undefined}
                    {cardContent}
                </Card>
            </div>
        );
    }
    else {
        return <Typography variant="h5">Cannot find Any matches at the moment!!</Typography>;
    }
}
