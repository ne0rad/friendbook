import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Main({ user }) {
    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                <Typography variant="h3">Main Page</Typography>
                <Typography>Hello, {user.username}</Typography>
            </Paper>
        </Box>
    )
}

export default Main;
