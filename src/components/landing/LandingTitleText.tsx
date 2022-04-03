import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function LandingTitleText() {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          display: "inline"
        }}
      >
        Friend
      </Typography>
      <Typography
        variant="h2"
        align="center"
        color={blue[700]}
        sx={{
          display: "inline"
        }}
      >
        Book
      </Typography>
    </Box>
  );
}
