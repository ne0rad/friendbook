import { Button, Grid, Paper, Skeleton, Typography } from "@mui/material";

function Profile({ user }) {

    return (
        <Grid container spacing={1} sx={{ my: 1 }} justifyContent="center">
            <Grid xs={8} textAlign="left" item>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Skeleton variant="rectangular" width={210} height={210} />
                    <hr />
                    <Typography>Username: <b>{user.username}</b></Typography>
                    <hr />
                    <Button variant="outlined">Edit Profile</Button>
                </Paper>
            </Grid>
            <Grid xs={3} item>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="overline" fontSize={22}>Friends</Typography>
                    <Typography>ne0rad</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Profile;
