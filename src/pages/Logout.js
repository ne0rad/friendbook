import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Logout({ logout }) {
    const navigate = useNavigate();
    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 4 }}>
                <Typography variant='h4'>Logout</Typography>
                <hr />
                <Typography sx={{ my: 2 }}>Are you sure you want to log out?</Typography>
                <Button onClick={() => logout()} variant="contained" size="large" sx={{ mx: 2 }}>Yes</Button>
                <Button onClick={() => navigate('/')} variant="contained" size="large" sx={{ mx: 2 }}>No</Button>
            </Paper>
        </Box>
    )
}

export default Logout;
