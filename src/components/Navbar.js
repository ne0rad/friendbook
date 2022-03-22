import { AppBar, Box, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import NavMenu from './NavMenu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useContext } from 'react';
import NotificationsDrawer from './NotificationsDrawer';
import MessagesDrawer from './MessagesDrawer';
import { UserContext, CacheContext } from "../config/context";


function NavBar({ loading }) {

    const user = useContext(UserContext);
    const cache = useContext(CacheContext);

    const [openNotifications, setOpenNotifications] = useState(false);
    const [openMessages, setOpenMessages] = useState(false);

    const navigate = useNavigate()


    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 2,
            border: `2px solid white`,
            padding: '0 4px',
        },
    }));

    function toggleNotifications() {
        setOpenNotifications(!openNotifications);
    }

    function toggleMessages() {
        setOpenMessages(!openMessages);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
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
                                        aria-label="Messages"
                                        size="large"
                                        sx={{ color: 'white' }}
                                        onClick={() => toggleMessages()}
                                    >
                                        <StyledBadge badgeContent={cache.unreadChats} color="primary">
                                            <EmailIcon />
                                        </StyledBadge>
                                    </IconButton>

                                    <IconButton
                                        aria-label="Notifications"
                                        size="large"
                                        sx={{ color: 'white' }}
                                        onClick={toggleNotifications}
                                    >
                                        <StyledBadge badgeContent={3} color="primary">
                                            <NotificationsIcon />
                                        </StyledBadge>
                                    </IconButton>
                                    <Box sx={{ mx: 1 }} />
                                    <NavMenu />
                                    <NotificationsDrawer openNotifications={openNotifications} toggleNotifications={toggleNotifications} />
                                    <MessagesDrawer openMessages={openMessages} toggleMessages={toggleMessages} />
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
