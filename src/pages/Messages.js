import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Messages({ user }) {

    const [newMessageInput, setNewMessageInput] = useState('');

    const navigate = useNavigate();

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                <List>

                    {
                        // NEW MESSAGE
                    }
                    <ListItem sx={{ justifyContent: "center", alignItems: "center", mb: 1 }}>
                        <TextField
                            placeholder="Recepient's username"
                            variant="standard" size="small"
                            sx={{ mr: 1 }}
                            value={newMessageInput}
                            onChange={(e) => setNewMessageInput(e.target.value)}
                        />
                        <Button variant="outlined">New message</Button>
                    </ListItem>

                    {
                        // All conversations
                    }
                    {['qweee', 'admin', 'lol', 'asd', 'amtg', 'zerex', 'zrex', 'god', 'test1', 'test2', 'test3'].map((text, index) => (
                        <ListItem button key={text} divider sx={{ px: 1, py: 0 }} onClick={() => navigate(`/chat/123`)}>
                            <ListItemIcon >
                                {index === 1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} secondary="You: Hey, I just wanted to let you know about the bug I've found. Please get back to me ASAP." />
                        </ListItem>
                    ))}

                </List>

            </Paper>
        </Box>
    )
}

export default Messages;
