import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Divider, Fade, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';

function NavMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ color: 'white' }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    navigate('/me');
                }}>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => {
                    handleClose();
                    navigate('/me');
                }}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText>Friends</ListItemText>
                </MenuItem>

                <MenuItem onClick={() => {
                    handleClose();
                    navigate('/settings');
                }}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem onClick={() => {
                    handleClose();
                    navigate('/logout');
                }}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>

            </Menu>
        </>
    );
}

export default NavMenu;
