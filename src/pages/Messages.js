import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from '../config/socket';
import { UserContext } from '../config/user';

function Messages() {

    const [newMessageInput, setNewMessageInput] = useState('');
    const [newMessageError, setNewMessageError] = useState(false);
    const [chatrooms, setChatrooms] = useState([]);

    const navigate = useNavigate();
    const socket = useContext(SocketContext);
    const user = useContext(UserContext);

    useEffect(() => {
        socket.emit('get_chats', { user: user._id }, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
                setChatrooms(res.chatrooms);
            }
        });
        return () => {
            setChatrooms([]);
        }
    }, [socket, user]);

    function startNewChat(e) {
        e.preventDefault();
        socket.emit('create_chat', { recipient: newMessageInput }, (err, res) => {
            if (err) {
                setNewMessageError(true);
                console.log(err);
            } else {
                navigate('/chat/' + res.chatroom);
            }
        });
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                <List>

                    {
                        // NEW MESSAGE
                    }
                    <ListItem sx={{ mb: 1 }}>
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
                    {chatrooms.map((chatroom, index) => (
                        <ListItem button key={chatroom._id} divider sx={{ px: 1, py: 0 }} onClick={() => navigate(`/chat/${chatroom._id}`)}>
                            <ListItemIcon >
                                {index === 1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                            </ListItemIcon>
                            <ListItemText primary={chatroom.members.map(member => {
                                if(member._id === user._id) {
                                    return null;
                                } else {
                                    return member.username;
                                }
                            })} secondary={chatroom.messages[0].author + ": " + chatroom.messages[0].message} />
                        </ListItem>
                    ))}

                </List>

            </Paper>
        </Box>
    )
}

export default Messages;
