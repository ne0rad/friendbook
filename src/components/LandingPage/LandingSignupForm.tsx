import { Box, Button, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LandingSignupForm(): JSX.Element {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <Box
      component="form"
      sx={{ p: 2 }}
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault();
        // TODO: Signup
        console.log({
          username,
          password,
          passwordConfirm
        });
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
        sx={{ mb: 2 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
        value={password}
        fullWidth
      />
      <TextField
        size="small"
        variant="outlined"
        label="Confirm Password"
        type="password"
        sx={{ mb: 4 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPasswordConfirm(e.target.value);
        }}
        value={passwordConfirm}
        fullWidth
      />

      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
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
