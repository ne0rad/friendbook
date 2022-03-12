import { Box, Paper } from "@mui/material";
import ChatList from "../components/Chat/ChatList";
import NewChatForm from "../components/Chat/NewChatForm";

function Messages() {

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2 }} >

                <NewChatForm />
                <ChatList />

        </Paper>
        </Box >
    )
}

export default Messages;
