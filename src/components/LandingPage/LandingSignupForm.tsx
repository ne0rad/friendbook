import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingSignupForm(): JSX.Element {
  return (
    <Box
      component="form"
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
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        size="small"
        variant="outlined"
        label="Repeat Password"
        sx={{ mb: 4 }}
        fullWidth
      />

      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ display: "block" }}
        fullWidth
      >
        {"Sign-up"}
      </Button>
      <Box textAlign="center" sx={{ pt: 3 }}>
      <Typography variant="subtitle2">Already have an account?</Typography>
        <Typography variant="subtitle2"><Link to="/login">Login here</Link></Typography>
      </Box>
    </Box>
  );
}
