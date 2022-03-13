import { Grid } from "@mui/material";
import { useContext } from "react";
import Details from "../components/Me/Details"
import Friends from "../components/Me/Friends";
import Post from "../components/Post";
import { UserContext } from "../config/context";

function Profile() {

    const user = useContext(UserContext);

    return (
        <>
            <Grid container spacing={1}>

                <Grid xs={12} md={8} item>
                    <Details user={user} />
                </Grid>

                <Grid xs={12} md={4} item>
                    <Friends />
                </Grid>

            </Grid>

            <Grid container spacing={1}>
                <Grid xs={12} md={8} item>
                    <Post />
                </Grid>
            </Grid>
        </>
    )
}

export default Profile;
