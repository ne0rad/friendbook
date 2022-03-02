import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { blue, green } from '@mui/material/colors';

function MessageBox({ user, messages, scrollToBottomSwitch }) {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    }

    useEffect(() => {
        scrollToBottom();
    }, [scrollToBottomSwitch]);

    return (
        <Paper sx={{ backgroundColor: "#F5F5F5", height: "70vh", my: 2, border: "1px solid black", overflow: "scroll" }}>

            {
                messages.map((message, index) => {
                    const isMe = message.author === user.username;
                    return (
                        <Box
                            key={index}
                            sx={{ p: 1, display: 'flex', justifyContent: isMe ? 'flex-start' : 'flex-end' }}
                        >
                            <Typography
                                backgroundColor={isMe ? blue[100] : green[100]}
                                sx={{ p: 1, borderRadius: "5px", width: "fit-content", maxWidth: "80%", wordBreak: "break-all" }}
                            >
                                {isMe ? 'You' : message.author}: {message.message}
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
