import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

function MessagesDrawer({ openMessages, toggleMessages }) {

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={() => toggleMessages()}
            onKeyDown={() => toggleMessages()}
        >
            <List>
                <ListItem divider>
                    <ListItemText sx={{textAlign: 'center'}} primary="Messages" />
                </ListItem>
                {['qwe', 'admin'].map((text, index) => (
                    <ListItem button key={text} divider sx={{px: 1, py: 0}}>
                        <ListItemIcon >
                            {index === 1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} secondary="Hey, I just wanted to let you kno..."/>
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
