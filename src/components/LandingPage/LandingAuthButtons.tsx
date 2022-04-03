import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingAuthButtons(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          my: 6,
          width: "210px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/signup")}
        >
          Sign-up
        </Button>
      </Box>
      <Button>Demo Preview</Button>
    </>
  );
}
