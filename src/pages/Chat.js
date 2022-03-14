import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../components/Chat/MessageBox";
import { SocketContext, CacheContext } from '../config/context';

function Chat() {

    const [messages, setMessages] = useState([]);

    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [messageLoading, setMessageLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chatroom, setChatroom] = useState(null);
    const [chatroomMembers, setChatroomMembers] = useState([]);

    const navigate = useNavigate();
    const params = useParams();
    const socket = useContext(SocketContext);
    const cache = useContext(CacheContext);


    useEffect(() => {
        if (!params.chatroom) {
            navigate('/messages');
        } else {
            if (cache && cache[params.chatroom]) {
                console.log(cache);
                setChatroomMembers(cache[params.chatroom].members);
                setMessages(cache[params.chatroom].messages);
                setLoading(false);
            }
            // Axios get chat NEEDS TO BE DONE
        }
        
    }, [params.chatroom, cache, navigate]);


    function sendMessage(e) {
        e.preventDefault();
        if (messageInput.length > 0 && !messageLoading) {
            // Axios send message NEEDS TO BE DONE
        }
    }

    return (
        <>
            {
                loading ? <Loading /> : (
                    <Box maxWidth="sm">
                        <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                            <Typography variant="body2">
                                [ {chatroomMembers.map(member => member.username).join(', ')} ]
                            </Typography>

                            <MessageBox messages={messages} />


                            <Box
                                component="form"
                                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                onSubmit={(e) => {
                                    sendMessage(e);
                                }}>
                                <TextField
                                    placeholder="Your message"
                                    variant="standard" size="small"
                                    sx={{ mr: 1, flex: 1 }}
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    autoFocus={true}
                                    error={error ? true : false}
                                    onKeyPress={() => { error && setError(false) }}
                                />
                                <Button type="submit" variant="contained" size="small" disabled={messageLoading}>Send</Button>
                            </Box>
                        </Paper>
                    </Box>
                )
            }
        </>
    )
}

export default Chat;
