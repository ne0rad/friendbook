import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function MessagesDrawer({ openMessages, toggleMessages }) {

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={() => toggleMessages()}
            onKeyDown={() => toggleMessages()}
        >
            <List>
                <ListItem divider>
                    <ListItemText sx={{textAlign: 'center'}} primary="Messages" />
                </ListItem>
                {['qwe', 'admin'].map((text, index) => (
                    <ListItem button key={text} divider>
                        <ListItemIcon >
                            {index === 1 ? <MailOutlineIcon /> : <MarkEmailUnreadIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} secondary="1 new message."/>
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
