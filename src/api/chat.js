import axios from "axios";
import { API_URI } from "../config/config";

export function newChat(token, members) {
    axios.post(API_URI + "/messages/create_chat", {
        members: JSON.stringify(members)
    }, { headers: { Authorization: token } })
        .then(res => {
            if (res.status === 200) {
                return res.data.chatID;
            }
        })
        .catch(err => {
            console.log(err.message);
            return false;
        })
}

export function sendMessage(token, chatID, message) {
    if (message.length > 0) {
        axios.post(API_URI + "/messages/send",
            { chatID: chatID, message: message },
            { headers: { Authorization: token } })
            .then(res => {
                if (res.status === 200) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(err => {
                return false;
            })
    }
}
