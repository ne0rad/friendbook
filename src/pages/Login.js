import { TextField, FormControl, Button, Checkbox, FormControlLabel, Paper, Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../config/config";

function Login({ login }) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [loading, setLoading] = useState(false);

    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    function checkInputs() {
        let valid = true;
        if (username.length < 1) {
            setUsernameError("Username can't be empty.");
            valid = false;
        }
        if (password.length < 1) {
            setPasswordError("Password can't be empty.");
            valid = false;
        }
        return valid;
    }

    function handleSubmit() {
        if (checkInputs()) {
            setLoading(true)
            axios.post(API_URI + "/users/loginUser", { username: username, password: password })
                .then((res) => {
                    setLoading(false);
                    if (res.status === 200) {
                        login(username, "testToken")
                        navigate("/");
                    }
                })
                .catch((err) => {
                    if(!err.response) {
                        setUsernameError("Couldn't connect to server");
                        setLoading(false);
                        return;
                    }
                    if (err.response.data.error === 'username') {
                        setUsernameError(err.response.data.message);
                    }
                    if (err.response.data.error === 'password') {
                        setPasswordError(err.response.data.message);
                    }
                    setLoading(false);
                })
        }
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                <Typography variant="h3" fontSize="24px" fontWeight="500">LOGIN</Typography>
                <br />
                <Divider />
                <br />
                <FormControl variant="standard">
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        variant="outlined"
                        size="small"
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={handleEnter}
                        onKeyDown={() => setUsernameError(false)}
                        error={usernameError ? true : false}
                        helperText={usernameError}
                        required
                    />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        value={password}
                        variant="outlined"
                        type="password"
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleEnter}
                        onKeyDown={() => setPasswordError(false)}
                        error={passwordError ? true : false}
                        helperText={passwordError}
                        required
                    />
                    <br />
                    <div align="center">
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                    </div>
                    <br />
                    <Button variant="contained" type="submit" onClick={handleSubmit} disabled={loading}>LOGIN</Button>
                </FormControl>
                <br />
                <br />
                <Divider />
                <br />
                <Typography>
                    Don't have an account?
                    <br />
                    <Link to="/signup">Signup Here</Link>
                </Typography>
            </Paper>
        </Box>
    )
}

export default Login;
