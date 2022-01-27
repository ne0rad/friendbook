import { Grid } from "@mui/material";
import Details from "../components/Me/Details"
import Friends from "../components/Me/Friends";
import Post from "../components/Post";

function Profile({ user }) {

    return (
        <>
            <Grid container spacing={1} sx={{ my: 1 }} justifyContent="center">

                <Grid xs={12} md={8} item>
                    <Details user={user}/>
                </Grid>

                <Grid xs={12} md={4} item>
                    <Friends />
                </Grid>

            </Grid>

            <Grid container spacing={1} sx={{ mt: 1, mb: 3 }}>
                <Grid xs={12} md={8} item>
                    <Post />
                </Grid>
            </Grid>
        </>
    )
}

export default Profile;
