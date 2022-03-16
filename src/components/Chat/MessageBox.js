import { Paper } from "@mui/material";
import Message from "./Message";
import { useEffect, useRef } from "react";


function MessageBox({ messages }) {

    const messagesBottom = useRef(null);

    useEffect(() => {
        messagesBottom.current?.scrollIntoView();
    }, [messages]);

    return (
        <Paper
            elevation={0}
            id="scrollablePaper"
            sx={{
                backgroundColor: "#f2f2f2",
                my: 2,
                px: 0,
                py: 1,
                border: "1px solid #e0e0e0",
                height: '70vh',
                overflow: "auto"
            }}>
            {
                messages.map((message, index) => <Message message={message} key={index} />)
            }
            <div ref={messagesBottom} />
        </Paper >
    )
}

export default MessageBox;
