import { Grid, Paper, Typography } from "@mui/material";

function Profile({ user }) {

    return (
        <Grid container spacing={2} md={10} sx={{ my: 1 }} flexWrap="wrap">
            <Grid item xs={8}>
                <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="overline" fontSize={22}>Profile</Typography>
                    <Typography>Username: <b>{user.username}</b></Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="overline" fontSize={22}>Friends</Typography>
                    <Typography>ne0rad</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Profile;
