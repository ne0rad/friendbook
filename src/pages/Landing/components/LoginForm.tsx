import { Box, Button, Divider, Link, TextField, Typography } from "@mui/material";
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
    <Box
      component="form"
      sx={{
        p: 2,
        height: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" align="center" sx={{ mb: 3, mt: 0, p: 0 }}>
        {"Login"}
      </Typography>
      <TextField
        size="small"
        variant="outlined"
        label="Username"
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPassword(e.target.value);
        }}
        value={password}
        error={passwordError !== ""}
        helperText={passwordError}
        fullWidth
      />
      <Divider  />
      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
        fullWidth
      >
        {"Login"}
      </Button>

      <Box textAlign="center">
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
