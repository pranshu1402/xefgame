import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import './Header_Footer.css';

const Header = (props) => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        XEFGAME
                    </Typography>
                    <Button color="inherit" href="/auth">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;