import { Box, Button, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LandingLoginForm(): JSX.Element {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      component="form"
      sx={{ p: 2 }}
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault();
        // TODO: Login
        console.log({
          username,
          password
        });
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setUsername(e.target.value);
        }}
        value={username}
        fullWidth
        autoFocus
      />
      <TextField
        size="small"
        variant="outlined"
        label="Password"
        type="password"
        sx={{ mb: 4 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
        value={password}
        fullWidth
      />

      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
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
