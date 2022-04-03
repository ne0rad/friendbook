import { Box, Button } from "@mui/material";

export default function LandingAuthButtons() {
  return (
    <Box
      sx={{
        my: 6,
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button variant="outlined" size="large">
        Login
      </Button>
      <Button variant="outlined" size="large">
        Signup
      </Button>
    </Box>
  );
}
