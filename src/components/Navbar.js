import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate = useNavigate();

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
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
