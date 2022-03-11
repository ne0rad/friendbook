import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Post from "../components/Post";
import { useContext } from "react";
// import { TokenContext } from "../config/context";
import { UserContext } from "../config/user";

function Main() {

    //const token = useContext(TokenContext);
    const user = useContext(UserContext);

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h3">Main Page</Typography>
                <Typography>Username: {user.username}</Typography>
            </Paper>
            <Post />
        </Box>
    )
}

export default Main;
