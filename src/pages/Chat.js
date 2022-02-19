import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import Loading from '../pages/Loading';
import axios from 'axios';
import { API_URI } from '../config/config';
import { TokenContext } from "../config/context";
import { useNavigate, useParams } from "react-router-dom";

function Chat({ user }) {

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chatroom, setChatroom] = useState(null);

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
                    navigate('/messages');
                })
                .then(() => {
                    setLoading(false);
                });
        }

        return () => {
            setChatroom(null);
        }
    }, [params.chatroom, token, navigate]);

    return (
        <>
            {
                loading ? <Loading /> : (
                    <Box maxWidth="sm">
                        <Paper elevation={3} sx={{ p: 2, minHeight: "80vh" }} >

                            <Typography variant="h5" component="h3">{chatroom}</Typography>

                        </Paper>
                    </Box>
                )
            }
        </>
    )
}

export default Chat;
