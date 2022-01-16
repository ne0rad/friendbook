import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    return (
        <Box maxWidth="sm">
            <Paper elevation={5} sx={{ mt: 3, p: 2 }}>
                <h1>FriendBook Social Network</h1>
                <br />
                <h2>Technologies Used:</h2>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="React Framework" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="NodeJS (Express)" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="MongoDB" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Socket.io" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Material UI" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <h2>GitHub Links:</h2>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => window.open("https://github.com/ne0rad/friendbook", "_blank")}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Source" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => window.open("https://github.com/ne0rad", "_blank")}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile (ne0rad)" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    )
}

export default Home;
