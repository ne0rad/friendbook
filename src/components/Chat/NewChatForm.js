import { Box, Button, List, ListItem, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from '../../config/socket';

function NewChatForm() {

    const [newMessageInput, setNewMessageInput] = useState('');
    const [newMessageError, setNewMessageError] = useState(false);

    const navigate = useNavigate();
    const socket = useContext(SocketContext);

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
        <List>
            <ListItem>
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
        </List>
    )
}

export default NewChatForm;
