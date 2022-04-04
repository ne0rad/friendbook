import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingLoginForm(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{ p: 2 }}
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault();
        // TODO: Login
        console.log("submitted");
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 3, mt: 0, p: 0 }}>
        Login
      </Typography>

      <TextField
        size="small"
        variant="outlined"
        label="Username"
        sx={{ mb: 2 }}
        fullWidth
        autoFocus
      />
      <TextField
        size="small"
        variant="outlined"
        label="Password"
        type="password"
        sx={{ mb: 4 }}
        fullWidth
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block" }}
        fullWidth
      >
        {"Login"}
      </Button>

      <Box textAlign="center" sx={{ pt: 3 }}>
        <Typography variant="subtitle2">Don't have an account?</Typography>
        <Link
          sx={{ cursor: "pointer" }}
          variant="subtitle2"
          underline="hover"
          onClick={() => navigate("/signup")}
        >
          Sign-up here
        </Link>
      </Box>
    </Box>
  );
}
