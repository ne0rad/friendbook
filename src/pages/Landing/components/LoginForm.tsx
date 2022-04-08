import { Box, Button, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { InputWrapper } from ".";
import { AuthContext } from "../../../context";
import axios from "axios";

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Clear Errors on input change
  useEffect(() => {
    setUsernameError("");
    setPasswordError("");
  }, [username, password]);

  function hasErrors(): boolean {
    return usernameError !== "" || passwordError !== "";
  }

  function isEmpty(): boolean {
    let empty: boolean = false;
    if (username === "") {
      setUsernameError("Username is required");
      empty = true;
    }
    if (password === "") {
      setPasswordError("Password is required");
      empty = true;
    }
    return empty;
  }

  async function postLogin(): Promise<void> {
    setLoading(true);
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        setLoading(false);
        if (res?.status === 200) {
          auth.login(res.data.token);
        } else {
          setPasswordError("Invalid username or password");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err?.response?.status === 401) {
          if (err.response.data.loc === "username") {
            setUsernameError(err.response.data.msg);
          } else if (err.response.data.loc === "password") {
            setPasswordError(err.response.data.msg);
          }
        } else {
          setPasswordError("Connecion error occured");
        }
      });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!isEmpty() && !hasErrors()) {
      postLogin();
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
      <Typography variant="h5" align="center">
        {"Login"}
      </Typography>

      <InputWrapper>
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
      </InputWrapper>

      <InputWrapper>
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
      </InputWrapper>

      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2 }}
        startIcon={<LoginIcon />}
        disabled={loading || hasErrors()}
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
