import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Home() {
    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                <Typography variant="h1" fontSize="35px" fontWeight="600">FriendBook</Typography>
                <Typography variant="h2" fontSize="20px" fontWeight="300">Social Network</Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="h3" fontSize="20px" fontWeight="400">Technologies Used:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://reactjs.org" target="_blank">
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                            <ListItemText primary="ReactJS" secondary="User interface frontend framework"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://expressjs.com" target="_blank">
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                            <ListItemText primary="NodeJS (Express)" secondary="Backend API server"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://www.mongodb.com" target="_blank">
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                            <ListItemText primary="MongoDB" secondary="Relational Database"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://socket.io" target="_blank">
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                            <ListItemText primary="Socket.io" secondary="2-way communication with backend." />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://mui.com" target="_blank">
                            <ListItemIcon>
                                <DoubleArrowIcon />
                            </ListItemIcon>
                            <ListItemText primary="Material UI" secondary="UI Design Framework"/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <br />
                <Typography variant="h3" fontSize="20px" fontWeight="400">GitHub Links:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://github.com/ne0rad/friendbook" target="_blank">
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Source" secondary="Source code of the project"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="https://github.com/ne0rad" target="_blank">
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile (ne0rad)" secondary="My GitHub profile"/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <br />
                <Typography>Made by ne0rad</Typography>
            </Paper>
        </Box>
    )
}

export default Home;
