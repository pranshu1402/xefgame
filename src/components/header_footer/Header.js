import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const loginButton = (<Button color="inherit" href="/auth">LogIn</Button>);
    const avatar = (
        <div>
            <Button aria-describedby="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar src={props.userImage}/>
            </Button>
            <Popover
                id="simple-menu"
                anchorEl={anchorEl}
                placement="bottom"
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuList>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={props.onLogout}>Logout</MenuItem>
                </MenuList>

            </Popover>
        </div>
    );

    return (
        <AppBar>
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