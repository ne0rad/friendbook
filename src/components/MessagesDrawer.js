import { Box, Button, ButtonGroup, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useNavigate } from "react-router-dom";

function MessagesDrawer({ openMessages, toggleMessages }) {

   // const token = useContext(TokenContext);
    const navigate = useNavigate();

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={() => toggleMessages()}
            onKeyDown={() => toggleMessages()}
        >
            <List>

                <ListItem sx={{mb: 1}}>
                    <ButtonGroup variant="outlined" aria-label="message functions" sx={{alignItems: 'center'}}>
                        <Button>New Message</Button>
                        <Button onClick={() => navigate('/messages')}>All Messages</Button>
                    </ButtonGroup>
                </ListItem>

                {['qwe', 'admin'].map((text, index) => (
                    <ListItem button key={text} divider sx={{ px: 1, py: 0 }}>
                        <ListItemIcon >
                            {index === 1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} secondary="Hey, I just wanted to let you kno..." />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Drawer
                anchor={'right'}
                open={openMessages}
                onClose={() => toggleMessages()}
            >
                {list('right')}
            </Drawer>
        </>
    )
}

export default MessagesDrawer;
