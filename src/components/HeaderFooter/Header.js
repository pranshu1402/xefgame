import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import './HeaderFooter.css';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();

    const loginButton = (<Button color="inherit"
                                 onClick={() => (props.history.push('auth'))}>
                            LogIn
                        </Button>
    );

    const avatar = (
        <>
            <NavLink className="navItems" to='/home'>
                <Button variant="text">HOME</Button>
            </NavLink>
            <NavLink className="navItems" to='/matches'>
                <Button variant="text">MATCH</Button>
            </NavLink>
            <HeaderMenu onLogout={props.onLogout}>
                <Avatar src={props.userImage} />
            </HeaderMenu>
        </>
    );

    return (
        <AppBar className="navbar">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    XEFGAME
                    </Typography>
                {
                    props.isSigned ? avatar : loginButton
                }
            </Toolbar>
        </AppBar>
    );

}

export default Header;