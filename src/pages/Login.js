import { TextField, FormControl, Button, Checkbox, FormControlLabel, Paper, Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    function handleSubmit() {
        let hasErrors = false;
        if (username.length < 1) {
            setUsernameError("Username can't be empty.");
            hasErrors = true;
        }
        if (password.length < 1) {
            setPasswordError("Password can't be empty.");
            hasErrors = true;
        }
        if (!hasErrors) {
            console.log("All good! Let's login.");
        }
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                <Typography variant="h3" fontSize="24px" fontWeight="500">LOGIN</Typography>
                <br/>
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
                    <Button variant="contained" type="submit" onClick={handleSubmit}>LOGIN</Button>
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
