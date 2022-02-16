import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

function Messages({ user }) {
    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                <List>
                    <ListItem>
                        <Button sx={{mb: 1}} variant="outlined">New message</Button>
                    </ListItem>
                    {['qwe', 'admin', 'lol', 'asd', 'amtg', 'zerex', 'zrex', 'god', 'test1', 'test2', 'test3'].map((text, index) => (
                        <ListItem button key={text} divider sx={{ px: 1, py: 0 }}>
                            <ListItemIcon >
                                {index === 1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} secondary="You: Hey, I just wanted to let you know about the bug I've found. Please get back to me ASAP."/>
                        </ListItem>
                    ))}

                </List>

            </Paper>
        </Box>
    )
}

export default Messages;
