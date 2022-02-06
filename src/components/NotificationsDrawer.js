import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from "react-router-dom";

function NotificationsDrawer({ openNotifications, toggleNotifications }) {

    const navigate = useNavigate();

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={() => toggleNotifications()}
            onKeyDown={() => toggleNotifications()}
        >
            <List>
                <ListItem divider>
                    <ListItemText sx={{textAlign: 'center'}} primary="Notifications" />
                </ListItem>
                {['Max', 'qwe', 'admin'].map((text, index) => (
                    <ListItem button key={text} divider onClick={() => navigate('/notifications')}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <NotificationsIcon /> : <NotificationsNoneIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} secondary="mentioned you in his comment."/>
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
