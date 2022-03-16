import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

function Loading() {

    const [tooLong, setTooLong] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTooLong(true);
        }, 10000);
        return () => {
            setTooLong(false);
            clearTimeout(timer);
        }
    }, []);

    return (
        <Container maxWidth="lg" mt="1rem" p="0" align="center">
            <Box maxWidth="sm" sx={{ p: 4 }}>
                <CircularProgress />
                <Typography mt="1rem">
                    {!tooLong ? "Loading..." : "Loading... Try refreshing the page."}
                </Typography>
            </Box >
        </Container>
    )
}

export default Loading;
