import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import axios from 'axios';
import { API_URI } from '../config/config';
import { TokenContext } from "../config/context";
import { useNavigate, useParams } from "react-router-dom";
import MessageBox from "../components/Chat/MessageBox";

const testMessages = [
    { author: 'qwe', message: 'test 123' },
    { author: 'random', message: 'test 321' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'Admin', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'Dude', message: 'test 123 hdjskahdjkas hjkashdjkhsdajkdhasjkdhkjashdjkashdjkashdkjashjkdhaskjdhasjkdhaskjh jkashdjkhaskjhdsajkhdjkahkjdsakjshdjksah' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123' },
    { author: 'qwe', message: 'test 123 jasdlj dasjkl djsakjd aslk jdkjlsdakldsakldjasklj kasldjlkdsajkdljksakldjasd kljd klsaj lkdsajkldsjakljdaskl jdaksjldsaj' }
];

function Chat({ user }) {

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chatroom, setChatroom] = useState(null);
    const [scrollToBottomSwitch, setScrollToBottomSwitch] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    const token = useContext(TokenContext);


    useEffect(() => {
        if (!params.chatroom) {
            navigate('/messages');

        } else {

            setChatroom(params.chatroom);
            setLoading(true);
            axios.post(API_URI + "/messages/chatroom_messages",
                { chatroom: params.chatroom },
                { headers: { Authorization: token } })
                .then(res => {
                    if (res.status === 200) {
                        setMessages(res.data.messages);
                    } else {
                        setError(true);
                    }
                })
                .catch(err => {
                    setError(true);
                    //navigate('/messages');
                })
                .then(() => {
                    setLoading(false);
                });
        }

        return () => {
            setChatroom(null);
        }
    }, [params.chatroom, token, navigate]);

    function sendMessage(e) {
        e.preventDefault();
        if (messageInput.length > 0) {
            testMessages.push({ author: 'qwe', message: messageInput });
            setScrollToBottomSwitch(!scrollToBottomSwitch);
            setMessageInput('');
        }
    }

    return (
        <>
            {
                loading ? <Loading /> : (
                    <Box maxWidth="sm">
                        <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                            <Typography>Chat with {chatroom}</Typography>

                            <MessageBox user={user} messages={testMessages} scrollToBottomSwitch={scrollToBottomSwitch} />


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
                                    error={error}
                                    onKeyPress={() => { error && setError(false)}}
                                />
                                <Button type="submit" variant="contained" size="small">Send</Button>
                            </Box>
                        </Paper>
                    </Box>
                )
            }
        </>
    )
}

export default Chat;
