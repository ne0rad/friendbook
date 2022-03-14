import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext, SocketContext, CacheContext } from "../../config/context";
import Loading from "../../pages/Loading";
import axios from "axios";

function ChatList() {

    const [chats, setchats] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const user = useContext(UserContext);
    const cache = useContext(CacheContext);

    useEffect(() => {
        if(cache && cache.chats) {
            setchats(cache.chats);
            setLoading(false);
        }
        axios.get("/chat/get_chats")
            .then(res => {
                if(res.status === 200) {
                    setchats(res.data.chats);
                }
            })
            .catch(err => {
                console.log(err);
            })
            .then(() =>{
                setLoading(false);
            })
    }, [user, cache]);

    return (
        <List>
            {loading ? <Loading /> : chats.length > 0 ?
                chats.map(chat =>
                (
                    <ListItem
                        button
                        key={chat._id}
                        divider
                        sx={{ px: 1, py: 0 }}
                        onClick={() => navigate(`/chat/${chat._id}`)}
                    >
                        <ListItemIcon >
                            {chat.readBy.indexOf(user._id) !== -1 ? <DraftsOutlinedIcon /> : <MarkEmailUnreadIcon />}
                        </ListItemIcon>
                        <ListItemText primary={chat.members.map((member, i) => {
                            if (member._id === user._id) {
                                return null;
                            } else {
                                return member.username + " ";
                            }
                        })} secondary={chat.lastMessage
                            ?
                            chat.lastMessage.author + ": " + chat.lastMessage.message
                            :
                            "No messages"} />
                    </ListItem>
                ))
                :
                (
                    <ListItem>
                        <ListItemText sx={{ textAlign: 'center' }} primary="No chats..." />
                    </ListItem>
                )}
        </List>
    )
}

export default ChatList;
