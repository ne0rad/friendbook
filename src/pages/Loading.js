import { CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";

function Loading() {
    return (
        <Container maxWidth="lg" mt="1rem" p="0" align="center">
            <Box maxWidth="sm" sx={{p: 4}}>
                    <CircularProgress />
            </Box >
        </Container>
    )
}

export default Loading;
