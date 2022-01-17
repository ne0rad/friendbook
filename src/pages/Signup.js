import { useState } from "react";
import { Button, FormControl, TextField, Box, Paper, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../config/config";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [password2Error, setPassword2Error] = useState(false);

    const [loading, setLoading] = useState(false);


    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    function handleSubmit() {
        let errors = false;
        if (username.length < 1) {
            errors = true;
            setUsernameError("Username can't be empty.");
        }
        if (password.length < 1) {
            errors = true;
            setPasswordError("Password can't be empty.");
        }
        if (password2 !== password) {
            errors = true;
            setPassword2Error("Passwords must match.");
        }
        if (!errors) {
            setLoading(true)
            axios.post(API_URI + "/users/createUser", { username: username, password: password })
                .then((res) => {
                    if (res.status === 200) {
                        console.log('User Created!');
                    } else {
                        console.log('Error creating user');
                    }
                })
                .catch((err) => {
                    if (err.response.data === 'username') {
                        setUsernameError('Username already taken.');
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                <Typography variant="h3" fontSize="24px" fontWeight="500">SIGNUP</Typography>
                <br />
                <Divider />
                <br />
                <FormControl variant="outlined" size="sm">
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        size="small"
                        onChange={(e) => setUsername(e.target.value)}
                        error={usernameError ? true : false}
                        helperText={usernameError}
                        onKeyPress={handleEnter}
                        onKeyDown={() => setUsernameError(false)}
                        required
                    />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        value={password}
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError ? true : false}
                        helperText={passwordError}
                        onKeyPress={handleEnter}
                        onKeyDown={() => setPasswordError(false)}
                        type="password"
                        required
                    />
                    <br />
                    <TextField
                        id="password2"
                        label="Confirm Password"
                        value={password2}
                        size="small"
                        onChange={(e) => setPassword2(e.target.value)}
                        error={password2Error ? true : false}
                        helperText={password2Error}
                        onKeyPress={handleEnter}
                        onKeyDown={() => setPassword2Error(false)}
                        type="password"
                        required
                    />
                    <br />
                    <br />
                    <Button variant="contained" onClick={handleSubmit} disabled={loading}>Signup</Button>
                </FormControl>
                <br />
                <br />
                <Divider />
                <br />
                <Typography>
                    Already have an account?
                    <br />
                    <Link to="/login">Login Here</Link>
                </Typography>
            </Paper>
        </Box>
    )
}

export default Signup;
