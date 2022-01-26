import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

function NavBar({ user }) {
    const navigate = useNavigate();

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
                    {user ? (
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
