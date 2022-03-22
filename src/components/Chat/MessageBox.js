import { Box } from "@mui/material";
import Message from "./Message";
import { useEffect, useRef } from "react";


function MessageBox({ messages }) {

    const messagesBottom = useRef(null);

    useEffect(() => {
        messagesBottom.current?.scrollIntoView();
    }, [messages]);

    return (
        <Box
            id="scrollablePaper"
            sx={{
                backgroundColor: "#f2f2f2",
                mb: 1,
                px: 0,
                py: 1,
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                flex: 1,
                overflow: "auto"
            }}>
            {
                messages.map((message, index) => <Message message={message} key={index} />)
            }
            <div ref={messagesBottom} />
        </Box >
    )
}

export default MessageBox;
