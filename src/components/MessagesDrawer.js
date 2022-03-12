import { Box, Button, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatList from "./Chat/ChatList";

function MessagesDrawer({ openMessages, toggleMessages }) {

    const navigate = useNavigate();

    return (
        <>
            <Drawer
                anchor={'right'}
                open={openMessages}
                onClose={() => toggleMessages()}
            >
                <Box
                    sx={{ width: 300 }}
                    role="presentation"
                    onClick={() => toggleMessages()}>

                    <Button
                        sx={{ width: '100%', p: 1 }}
                        onClick={() => {
                            navigate('/messages')
                        }}>
                        All chats
                    </Button>

                    <ChatList />

                </Box>
            </Drawer>
        </>
    )
}

export default MessagesDrawer;
