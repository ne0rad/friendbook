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
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: 'pointer' }}
                        onClick={() => navigate("/")}
                    >
                        FriendBook
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
                    <Button color="inherit" onClick={() => navigate("/signup")}>Signup</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
