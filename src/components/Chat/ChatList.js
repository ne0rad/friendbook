import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../config/user";
import { SocketContext } from '../../config/socket';

function ChatList() {

    const [chatrooms, setChatrooms] = useState([]);

    const navigate = useNavigate();
    const user = useContext(UserContext);
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.emit('get_chats', { user: user._id }, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                setChatrooms(res.chatrooms);
                console.log(res.chatrooms);
            }
        });
    }, [socket, user]);

    return (
        <List>
            {chatrooms.length > 0 ? chatrooms.map((chatroom, index) => (
                <ListItem
                    button
                    key={chatroom._id}
                    divider
                    sx={{ px: 1, py: 0 }}
                    onClick={() => navigate(`/chat/${chatroom._id}`)}
                >
                    <ListItemIcon >
                        {chatroom.readBy.indexOf(user._id) !== -1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                    </ListItemIcon>
                    <ListItemText primary={chatroom.members.map((member, i) => {
                        if (member._id === user._id) {
                            return null;
                        } else {
                            return member.username + " ";
                        }
                    })} secondary={chatroom.lastMessage
                        ?
                        chatroom.lastMessage.author + ": " + chatroom.lastMessage.message
                        :
                        "No messages"} />
                </ListItem>
            )) : (
                <ListItem>
                    <ListItemText sx={{ textAlign: 'center' }} primary="No chats..." />
                </ListItem>
            )}
        </List>
    )
}

export default ChatList;
