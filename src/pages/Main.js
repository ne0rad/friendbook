import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Post from "../components/Post";
import { useContext } from "react";
import { UserContext } from "../config/context";

function Main() {

    const user = useContext(UserContext);

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h3">Main Page</Typography>
                <Typography variant="h5">{user.username}</Typography>
            </Paper>
            <Post />
        </Box>
    )
}

export default Main;
