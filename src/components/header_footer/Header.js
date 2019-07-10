import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Header_Footer.css';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
  }));

const Header = (props) => {
    const classes = useStyles();
    const loginButton = (<Button color="inherit" href="/auth">LogIn</Button>);
    const userMenu = (<div className="userMenu">
        <Avatar/>
        <Button color="inherit" onClick={props.onLogout}>Log Out</Button>
    </div>);

    return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        XEFGAME
                    </Typography>
                    {
                        props.isSigned?userMenu:loginButton
                    }
                </Toolbar>
            </AppBar>
    );

}

export default Header;