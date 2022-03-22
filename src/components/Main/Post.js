import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Skeleton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

function Post({ post }) {

    const [expanded, setExpanded] = useState(false);
    const [liked, setLiked] = useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    };

    function handleLikeClick() {
        setLiked(!liked);
    }

    return (
        <Card elevation={3} sx={{my: 2}}>
            <CardHeader
                avatar={<Avatar aria-label="qwe">Q</Avatar>}
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
                <IconButton aria-label="like" onClick={handleLikeClick}>
                    <FavoriteIcon htmlColor={liked ? "tomato" : "primary"} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button
                    expand={expanded.toString()}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ marginLeft: 'auto' }}
                    endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                    Comments (3)
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <hr />
                <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <Skeleton variant="circular" width={40} height={40} sx={{ mr: 3, mt: 1, minWidth: 40 }} />
                    <div style={{ width: "100%" }}>
                        <Skeleton variant="text" height={30} />
                        <Skeleton variant="text" height={30} />
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Post;
