import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import './Header_Footer.css';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
  }));

const Header = (props) => {
    const classes = useStyles();
    const loginButton = (<Button color="inherit" href="/auth">LogIn</Button>);
    const logoutButton = (<Button color="inherit" onClick={props.onLogout}>Log Out</Button>); 
    return (
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        XEFGAME
                    </Typography>
                    {
                        props.isSigned?logoutButton:loginButton
                    }
                </Toolbar>
            </AppBar>
    );

}

export default Header;