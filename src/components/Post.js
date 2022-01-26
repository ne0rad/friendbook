import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Skeleton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

function Posts({ posts }) {

    const [expanded, setExpanded] = useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    };

    return (
        <Card elevation={3}>
            <CardHeader
                avatar={
                    <Avatar aria-label="qwe">
                        Q
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Posted by qwe"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body1">
                    This is a test post. Later it will be pulled from DB. Testing only.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ marginLeft: 'auto' }}
                    endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    Comments
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Skeleton variant="circular" width={40} height={40} sx={{ mr: 3, minWidth: 40 }} />
                    <br />
                    <div style={{ width: "100%" }}>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Posts;
