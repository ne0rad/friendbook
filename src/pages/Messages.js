import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../config/context";
import { newChat } from "../api/chat";

function Messages({ user }) {

    const [newMessageInput, setNewMessageInput] = useState('');
    const [newMessageError, setNewMessageError] = useState(false);

    const navigate = useNavigate();
    const token = useContext(TokenContext);

    function startNewChat(e) {
        e.preventDefault();
        const response = newChat(token, [newMessageInput]);
        if (response) {
            setNewMessageInput('');
            setNewMessageError(false);
            navigate("/chat/" + response.chatID);
        } else {
            setNewMessageError(true);
        }
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                <List>

                    {
                        // NEW MESSAGE
                    }
                    <ListItem sx={{mb: 1}}>
                        <Box 
                        component="form"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
                        onSubmit={(e) => startNewChat(e)}>
                            <TextField
                                placeholder="Recepient's username"
                                variant="standard" size="small"
                                sx={{ mr: 1, flex: 1 }}
                                value={newMessageInput}
                                onChange={(e) => setNewMessageInput(e.target.value)}
                                onKeyDown={() => setNewMessageError(false)}
                                error={newMessageError}
                            />
                            <Button type="submit" variant="contained" size="small">New Chat</Button>
                        </Box>
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
