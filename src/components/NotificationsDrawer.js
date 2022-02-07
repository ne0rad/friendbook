import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from "react-router-dom";

function NotificationsDrawer({ openNotifications, toggleNotifications }) {

    const navigate = useNavigate();

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={() => toggleNotifications()}
            onKeyDown={() => toggleNotifications()}
        >
            <List>
                <ListItem divider>
                    <ListItemText sx={{textAlign: 'center'}} primary="Notifications" />
                </ListItem>
                {['Max', 'qwe', 'admin'].map((text, index) => (
                    <ListItem button key={text} divider onClick={() => navigate('/notifications')} sx={{px: 1, py: 0}}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <NotificationsActiveIcon /> : <NotificationsNoneIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} secondary="commented on your post"/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Drawer
                anchor={'right'}
                open={openNotifications}
                onClose={() => toggleNotifications()}
            >
                {list('right')}
            </Drawer>
        </>
    )
}

export default NotificationsDrawer;
