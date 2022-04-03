import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingLoginForm(): JSX.Element {
  return (
    <Box
      component="form"
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
        size="large"
        type="submit"
        sx={{ display: "block" }}
        fullWidth
      >
        {"Login"}
      </Button>
      <Box textAlign="center" sx={{ pt: 3 }}>
        <Typography variant="subtitle2">Don't have an account?</Typography>
        <Typography variant="subtitle2"><Link to="/signup">Sign-up here</Link></Typography>
      </Box>
    </Box>
  );
}
