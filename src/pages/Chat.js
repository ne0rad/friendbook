import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../components/Chat/MessageBox";
import { SocketContext } from '../config/socket';
import { UserContext } from '../config/user';

function Chat() {

    const [messages, setMessages] = useState([]);

    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chatroom, setChatroom] = useState(null);
    const [chatroomMembers, setChatroomMembers] = useState([]);

    const navigate = useNavigate();
    const params = useParams();
    const socket = useContext(SocketContext);
    const user = useContext(UserContext);


    useEffect(() => {
        if (!params.chatroom) {
            navigate('/messages');
        } else {
            setLoading(true);
            socket.emit('join_chat', { chatroom: params.chatroom }, (err, res) => {
                setLoading(false);
                if (err) {
                    console.log(err);
                    navigate('/messages');
                } else {
                    setChatroom(params.chatroom);
                    setChatroomMembers(res.members);
                    setMessages(res.messages);
                }
            });
        }

        return () => {
            setChatroom(null);
            setChatroomMembers([]);
            setMessages([]);
        }
    }, [params.chatroom, navigate, socket]);

    useEffect(() => {
        socket.on("message", (res) => {
            if (res.chatroom === chatroom) {
                setMessages(messages => [...messages, res.message]);
            }
        });
        return () => {
            socket.off("message");
        }
    }, [socket, messages, chatroom, user]);

    function sendMessage(e) {
        e.preventDefault();
        if (messageInput.length > 0 && !messageLoading) {
            setMessageLoading(true);
            socket.emit('send_message', { chatroom: chatroom, message: messageInput }, (err, res) => {
                setMessageLoading(false);
                setMessageInput('');
                if (err) {
                    setError(err);
                    console.log(err);
                } else {
                    setMessages([...messages, res.message]);
                }
            });
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
