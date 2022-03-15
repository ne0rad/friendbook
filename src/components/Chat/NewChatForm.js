import { Box, Button, List, ListItem, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewChatForm() {

    const [newMessageInput, setNewMessageInput] = useState('');
    const [newMessageError, setNewMessageError] = useState(false);

    const navigate = useNavigate();

    function startNewChat(e) {
        e.preventDefault();
        axios.post("/chat/create", { recepient: newMessageInput })
            .then(res => {
                if(res.status === 200) navigate('/chat/' + res.data.chatID);
            })
            .catch(err => {
                console.log(err.response.data.msg)
                setNewMessageError(true);
            })
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
