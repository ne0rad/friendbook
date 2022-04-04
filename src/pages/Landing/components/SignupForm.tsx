import { Box, Button, Divider, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignupForm(): JSX.Element {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // Username Errors Check
  useEffect(() => {
    if (username.length < 3 && username !== "") {
      setUsernameError("Username must be at least 3 characters");
    } else if (username.length >= 3 || username === "") {
      setUsernameError("");
    }
  }, [username]);

  // Password Errors Check
  useEffect(() => {
    if (password.length < 3 && password !== "") {
      setPasswordError("Password must be at least 3 characters");
    } else if (password.length >= 3 || password === "") {
      setPasswordError("");
    }
  }, [password]);

  // Password Confirm Errors Check
  useEffect(() => {
    if (
      password !== passwordConfirm &&
      passwordConfirm !== "" &&
      password !== ""
    ) {
      setPasswordConfirmError("Passwords do not match");
    } else if (
      password === passwordConfirm ||
      passwordConfirm === "" ||
      password === ""
    ) {
      setPasswordConfirmError("");
    }
  }, [password, passwordConfirm]);

  function hasErrors(): boolean {
    return (
      usernameError !== "" ||
      passwordError !== "" ||
      passwordConfirmError !== ""
    );
  }

  return (
    <Box
      component="form"
      sx={{
        p: 2,
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault();
        // TODO: Signup
        if (!hasErrors()) {
          console.log({
            username,
            password,
            passwordConfirm,
          });
        }
      }}
    >
      <Typography variant="h5" align="center">
        {"Sign-up"}
      </Typography>

      <TextField
        size="small"
        variant="outlined"
        label="Username"
        type="text"
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
      <TextField
        size="small"
        variant="outlined"
        label="Confirm Password"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setPasswordConfirm(e.target.value);
        }}
        value={passwordConfirm}
        error={passwordConfirmError !== ""}
        helperText={passwordConfirmError}
        fullWidth
      />
      <Divider />
      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
        fullWidth
      >
        {"Sign-up"}
      </Button>

      <Box textAlign="center">
        <Typography variant="subtitle2">{"Already have an account?"}</Typography>
        <Link
          sx={{ cursor: "pointer" }}
          variant="subtitle2"
          underline="hover"
          onClick={() => navigate("/login")}
        >
          {"Login here"}
        </Link>
      </Box>
    </Box>
  );
}
