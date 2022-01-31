import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { TokenContext } from '../config/context';

function NavBar({ logout }) {
    const navigate = useNavigate();
    const token = useContext(TokenContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Typography
                        variant="h6"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate("/")}>
                        FriendBook
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }} />
                    {token ? (
                        // LOGGED IN
                        <>
                            <Tooltip title="Home" TransitionComponent={Zoom} arrow>
                                <IconButton
                                    aria-label="Home"
                                    size="large"
                                    sx={{ color: 'white' }}
                                    onClick={() => navigate('/')}
                                >
                                    <HomeIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="My Profile" TransitionComponent={Zoom} arrow>
                                <IconButton
                                    aria-label="My Profile"
                                    size="large"
                                    sx={{ color: 'white' }}
                                    onClick={() => navigate('/me')}
                                >
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Logout" TransitionComponent={Zoom} arrow>
                                <IconButton
                                    aria-label="Logout"
                                    size="large"
                                    sx={{ color: 'white' }}
                                    onClick={() => logout()}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) :
                        // NOT LOGGED IN
                        (
                            <>
                                <Button
                                    color="inherit"
                                    startIcon={<LoginIcon />}
                                    sx={{ mx: 1 }}
                                    onClick={() => navigate("/login")}>
                                    Login
                                </Button>
                                <Button
                                    color="inherit"
                                    startIcon={<HowToRegIcon />}
                                    sx={{ mx: 1 }}
                                    onClick={() => navigate("/signup")}>
                                    Signup
                                </Button>
                            </>
                        )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
