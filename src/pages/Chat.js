import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../components/Chat/MessageBox";
import { CacheContext, socket } from '../config/context';
import axios from "axios";

function Chat() {
    const navigate = useNavigate();
    const params = useParams();
    const cache = useContext(CacheContext);

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [messageLoading, setMessageLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chatMembers, setChatMembers] = useState([]);
    const [chatID, setChatID] = useState(params.chatID);




    useEffect(() => {
        if (loading) {
            if (!chatID || !chatID.match(/^[0-9a-fA-F]{24}$/)) {
                navigate('/messages');
            } else {
                if (cache && cache[chatID]) {
                    console.log('Loaded from cache.');
                    setChatMembers(cache[chatID].members);
                    setMessages(cache[chatID].messages);
                    setLoading(false);
                }
                axios.post("/chat/join", { chatID: chatID })
                    .then(res => {
                        setLoading(false);
                        if (res.status === 200) {
                            setChatMembers(res.data.members);
                            setMessages(res.data.messages);
                            cache[chatID] = res.data;
                            socket.emit('chat_join', { chatID: chatID });

                            socket.on('message', data => {
                                if (data.chatID === chatID) {
                                    setMessages(messages => [...messages, data.message]);
                                    cache[chatID].messages.push(data.message);
                                    axios.post('/chat/read', { chatID: chatID });
                                }
                            });

                            socket.on('connect', () => {
                                socket.emit('chat_join', { chatID: chatID });
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        navigate('/messages');
                    })
            }
        }
        return () => {
            socket.emit('chat_leave', { chatID: chatID });
            socket.off('message');
            socket.off('connect');
        }
    }, [chatID, cache, navigate, loading]);

    useEffect(() => {
        if (params.chatID !== chatID) {
            console.log('Chat ID changed.');
            socket.emit('chat_leave', { chatID: chatID });
            socket.off('message');
            socket.off('connect');
            setLoading(true);
            setChatID(params.chatID);
        }
    }, [params.chatID, chatID]);


    function sendMessage(e) {
        e.preventDefault();
        if (messageInput.length > 0 && !messageLoading) {
            setMessageLoading(true);
            axios.post('chat/send_message', { message: messageInput, chatID: chatID })
                .then(res => {
                    if (res.status === 200) {
                        setMessageInput('');
                    }
                })
                .catch(err => {
                    console.log(err);
                    setError(true);
                })
                .then(() => {
                    setMessageLoading(false);
                })
        }
    }

    return (
        loading && !cache[chatID] ? <Loading /> :
            <Box maxWidth="sm">
                <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                    <Typography variant="body2">
                        {loading && !cache[chatID] ? "Loading..." :
                            (<>
                                [ {chatMembers.map(member => member.username).join(', ')} ]
                            </>)}
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

export default Chat;
