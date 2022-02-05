import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Zoom, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import NavMenu from './NavMenu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import { useContext } from 'react';
import { TokenContext } from '../config/context';

function NavBar({ loading }) {
    const navigate = useNavigate();
    const token = useContext(TokenContext);

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 2,
            border: `2px solid white`,
            padding: '0 4px',
        },
    }));

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
                    {!loading && (
                        <>
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
                                    <Tooltip title="Messages" TransitionComponent={Zoom} arrow>
                                        <IconButton
                                            aria-label="Messages"
                                            size="large"
                                            sx={{ color: 'white' }}
                                        >
                                            <StyledBadge badgeContent={11} color="primary">
                                                <MessageIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Notifications" TransitionComponent={Zoom} arrow>

                                        <IconButton
                                            aria-label="Notifications"
                                            size="large"
                                            sx={{ color: 'white' }}
                                        >
                                            <StyledBadge badgeContent={2} color="primary">
                                                <NotificationsIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>

                                    <NavMenu />
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
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
