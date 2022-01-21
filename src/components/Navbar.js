import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

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
                            <IconButton
                                aria-label="Home"
                                size="large"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/')}
                            >
                                <HomeIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Profile"
                                size="large"
                                sx={{ color: 'white' }}
                                onClick={() => navigate('/profile')}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        </>
                    ) :
                        // NOT LOGGED IN
                        (
                            <>
                                <Button
                                    color="inherit"
                                    variant="outlined"
                                    sx={{ mx: 1 }}
                                    onClick={() => navigate("/login")}>
                                    Login
                                </Button>
                                <Button
                                    color="inherit"
                                    variant="outlined"
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
