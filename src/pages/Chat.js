import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../components/Chat/MessageBox";
import { CacheContext, socket, UserContext } from '../config/context';
import axios from "axios";
import Members from "../components/Chat/Members";

function Chat() {
    const navigate = useNavigate();
    const params = useParams();
    const cache = useContext(CacheContext);
    const user = useContext(UserContext);

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
                if (cache?.chats[chatID]) {
                    setChatMembers(cache.chats[chatID].members);
                    setMessages(cache.chats[chatID].messages);
                    setLoading(false);
                }
                axios.post("/chat/join", { chatID: chatID })
                    .then(res => {
                        setLoading(false);
                        if (res.status === 200) {
                            setChatMembers(res.data.members);
                            setMessages(res.data.messages);
                            cache.updateChats(chatID, res.data);

                            socket.emit('chat_join', { chatID: chatID, token: user.token });

                            socket.on('connect', () => {
                                socket.emit('chat_join', { chatID: chatID, token: user.token });
                            });

                            socket.on('message', data => {
                                cache.updateUnreadChats();
                                if (data.chatID === chatID) {
                                    setMessages(messages => [...messages, data.message]);
                                    cache.addMessage(chatID, data.message);
                                    axios.post('/chat/read', { chatID: chatID });
                                }
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        navigate('/messages');
                    })
            }
        }
    }, [chatID, cache, navigate, loading, user]);

    useEffect(() => {
        if (params.chatID !== chatID) {
            setLoading(true);
            setChatID(params.chatID);
        }
    }, [params.chatID, chatID]);

    useEffect(() => {
        return () => {
            socket.emit('chat_leave', { chatID: chatID, token: user.token });
            socket.off('message');
            socket.off('connect');
        }
    }, [chatID, user]);


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
                <Paper elevation={3} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 1.5,
                    height: "80vh",
                    minHeight: "250px"
                }} >

                    {loading && !cache[chatID] ?
                        "Loading..." :
                        <Members members={chatMembers} />
                    }

                    <MessageBox messages={messages} />


                    <Box
                        component="form"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}
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
