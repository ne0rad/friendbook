import { Avatar, Stack, Tooltip } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../config/context";

function Members({ members }) {

    const user = useContext(UserContext);

    return (
        <Stack alignSelf="center" mb={1} direction="row" spacing={1}>
            {members.map(member => {
                if (member._id !== user._id) {
                    return (
                        <Tooltip key={member._id} title={member.username} arrow>
                            <Avatar aria-label={member.username}>{member.username.charAt(0)}</Avatar>
                        </Tooltip>)
                } else {
                    return null;
                }
            }
            )}
        </Stack>
    )
}

export default Members;
