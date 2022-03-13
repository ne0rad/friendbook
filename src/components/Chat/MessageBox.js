import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { blue, green } from '@mui/material/colors';
import { UserContext } from "../../config/context";

function MessageBox({ messages }) {

    const messagesEndRef = useRef(null)
    const user = useContext(UserContext);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: "#f2f2f2",
                height: "70vh",
                my: 2,
                p: 1,
                border: "1px solid #e0e0e0",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>

            {
                messages.map((message, index) => {
                    const isMe = message.author === user.username;
                    const author = isMe ? "You" : message.author;
                    return (
                        <Box
                            key={index}
                            sx={{ m: 1, display: 'flex', justifyContent: isMe ? 'flex-start' : 'flex-end' }}
                        >
                            <Typography
                                sx={{
                                    p: 1,
                                    borderRadius: "5px",
                                    width: "fit-content",
                                    maxWidth: "80%",
                                    wordBreak: "break-all",
                                    backgroundColor: isMe ? blue[100] : green[100]
                                }}
                            >
                                <b>{author}:</b> {message.message}
                            </Typography>
                        </Box>
                    )
                })
            }
            <div ref={messagesEndRef} />
        </Paper>
    )
}

export default MessageBox;
