import { Box, Paper, Typography } from '@mui/material';

function NotFound() {
    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 4 }}>
                <Typography variant='h1'>404</Typography>
                <Typography variant='h4'>Page Not Found</Typography>
            </Paper>
        </Box>
    )
}

export default NotFound;
