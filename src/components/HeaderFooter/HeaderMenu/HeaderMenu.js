import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

function HeaderMenu(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <Fragment>
            <Button aria-describedby="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.children}
            </Button>
            <Popover
                id="simple-menu"
                anchorEl={anchorEl}
                placement="bottom"
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuList>
                    {/* <MenuItem onClick={handleClose}><NavLink className='menuItems' to='/home'>Profile</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}>Contests</MenuItem> */}
                    <MenuItem onClick={props.onLogout}>Logout</MenuItem>
                </MenuList>
            </Popover>
        </Fragment>
    );
}

export default HeaderMenu;