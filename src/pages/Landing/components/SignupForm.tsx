import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { InputWrapper } from ".";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context";

export default function SignupForm(): JSX.Element {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

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
    if (passwordConfirm === "") {
      setPasswordConfirmError("Password Confirm is required");
      empty = true;
    }
    return empty;
  }

  async function postSignup(): Promise<void> {
    setLoading(true);
    axios
      .post("/auth/signup", { username, password })
      .then((res) => {
        setLoading(false);
        if (res?.status === 200) {
          auth.login(res.data.token);
        } else {
          setUsernameError("Some error occurred");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err?.response?.status === 401) {
          if (err.response.data?.loc === "username") {
            setUsernameError(err.response.data.msg);
          } else if (err.response.data?.loc === "password") {
            setPasswordError(err.response.data.msg);
          }
        } else {
          setUsernameError("Some error occurred");
        }
      });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!isEmpty() && !hasErrors()) {
      postSignup();
    }
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
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" align="center">
        {"Sign-up"}
      </Typography>

      <InputWrapper>
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

      <InputWrapper>
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
      </InputWrapper>

      <Button
        variant="contained"
        type="submit"
        startIcon={<LoginIcon />}
        sx={{ mt: 2 }}
        disabled={loading || hasErrors()}
        fullWidth
      >
        {"Sign-up"}
      </Button>

      <Box textAlign="center">
        <Typography variant="subtitle2">
          {"Already have an account?"}
        </Typography>
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
