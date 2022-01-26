import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function Details({ user }) {
    return (
        <Paper elevation={3} sx={{ p: 2 }} >
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item xs={12} md={3}>
                    <Box sx={{ bgcolor: grey[200], minWidth: 150, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }} width={150} height={150}>
                        <Typography>No Photo</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={9} item>
                    <Typography variant="h4" component="h1" sx={{ wordWrap: "break-word" }}>{user.username}</Typography>
                    <Typography variant="subtitle1" sx={{ wordWrap: "break-word" }}>Description about yourself etc... asdasd asdas  das ds</Typography>
                </Grid>
            </Grid>
            <Box textAlign="right">
                <Button variant="outlined">Edit Profile</Button>
            </Box>
        </Paper>
    )
}

export default Details;
