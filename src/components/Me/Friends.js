import { Paper, Typography } from "@mui/material";

function Friends({ user }) {
    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography fontSize={28}>Friends</Typography>
            <Typography color="primary">ne0rad</Typography>
            <Typography color="primary">qweqwe</Typography>
            <Typography color="primary">admin</Typography>
        </Paper>
    )
}

export default Friends;
