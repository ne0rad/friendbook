import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Loading } from "./components";

export default function LoadingPage(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          sm: "center",
          xs: "flex-start",
        },
        height: "100vh",
        width: "100vw",
        minWidth: "260px",
        minHeight: "500px",
        m: 0,
        py: {
          sm: 0,
          xs: 2,
        },
        px: {
          sm: 1,
          xs: 0,
        },
      }}
    >
      <Loading />
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    </Box>
  );
}
