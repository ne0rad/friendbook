import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import EditIcon from '@mui/icons-material/Edit';


function Details({ user }) {
    return (
        <Paper elevation={3} sx={{ p: 2 }} >
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} md={3}>
                    <Box sx={{ bgcolor: grey[200], minWidth: 150, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }} width={150} height={150}>
                        <Typography color="text.secondary">No Photo</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={9} item>
                    <Typography variant="h4" component="h1" sx={{ wordWrap: "break-word" }}>{user.username}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ wordWrap: "break-word" }}>Description about yourself etc...</Typography>
                </Grid>
            </Grid>
            <hr />
            <Button startIcon={<EditIcon />}>Edit Profile</Button>
        </Paper>
    )
}

export default Details;
