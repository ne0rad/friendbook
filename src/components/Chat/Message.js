import { Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../../config/context";

function Message({ message }) {

    const user = useContext(UserContext);

    const isMe = message.author === user.username;
    const author = isMe ? "You" : message.author;

    return (
        <Box
            sx={{ my: 0.8, mx: 2, display: 'flex', justifyContent: isMe ? 'flex-start' : 'flex-end' }}
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
}

export default Message;
