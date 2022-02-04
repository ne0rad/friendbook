import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Settings() {
    return(
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 4 }}>
                <Typography variant='h1'>Settings</Typography>
                <Typography variant='h4'>Under construction.</Typography>
            </Paper>
        </Box>
    );
}

export default Settings;
