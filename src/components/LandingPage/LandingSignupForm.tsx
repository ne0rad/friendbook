import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LandingSignupForm(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{ p: 2 }}
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault();
        // TODO: Signup
        console.log("submitted");
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 3, mt: 0, p: 0 }}>
        Sign-up
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
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        size="small"
        variant="outlined"
        label="Repeat Password"
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
        {"Sign-up"}
      </Button>

      <Box textAlign="center" sx={{ pt: 3 }}>
        <Typography variant="subtitle2">Already have an account?</Typography>
        <Link
          sx={{ cursor: "pointer" }}
          variant="subtitle2"
          underline="hover"
          onClick={() => navigate("/login")}
        >
          Login here
        </Link>
      </Box>
    </Box>
  );
}
