import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, cursor: 'pointer' }}
                        onClick={() => navigate("/")}
                    >
                        FriendBook
                    </Typography>
                    <Button color="inherit" variant="standard" sx={{ mx: 1 }} onClick={() => navigate("/login")}>Login</Button>
                    <Button color="inherit" variant="standard" sx={{ mx: 1 }} onClick={() => navigate("/signup")}>Signup</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
