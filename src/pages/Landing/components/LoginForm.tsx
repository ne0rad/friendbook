import { Box, Button, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setUsernameError("");
    setPasswordError("");
  }, [username, password]);

  function hasErrors() {
    return usernameError !== "" || passwordError !== "";
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    // TODO: Login
    if (!hasErrors()) {
      if (username === "") {
        setUsernameError("Username is required");
      }
      if (password === "") {
        setPasswordError("Password is required");
      }
    }
  }

  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" sx={{ mb: 3, mt: 0, p: 0 }}>
        {"Login"}
      </Typography>

      <TextField
        size="small"
        variant="outlined"
        label="Username"
        sx={{ mb: usernameError !== "" ? 1 : 4 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setUsername(e.target.value.replace(/[^a-zA-Z\d]/, ""));
        }}
        value={username}
        error={usernameError !== ""}
        helperText={usernameError}
        fullWidth
        autoFocus
      />
      <TextField
        size="small"
        variant="outlined"
        label="Password"
        type="password"
        sx={{ mb: passwordError !== "" ? 2 : 5 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
        value={password}
        error={passwordError !== ""}
        helperText={passwordError}
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
        <Typography variant="subtitle2">{"Don't have an account?"}</Typography>
        <Link
          sx={{ cursor: "pointer" }}
          variant="subtitle2"
          underline="hover"
          onClick={() => navigate("/signup")}
        >
          {"Sign-up here"}
        </Link>
      </Box>
    </Box>
  );
}
