import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from '@mui/material/Box';
import { useState } from "react";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleEnter(e) {
        if (e.key === 'Enter') {
            console.log('Enter was pressed!');
            handleSubmit();
        }
    }
    function handleSubmit() {
        let hasErrors = false;
        if (username.length < 1) {
            setUsernameError(true);
            hasErrors = true;
        }
        if(password.length < 1) {
            setPasswordError(true);
            hasErrors = true;
        }
        if(!hasErrors) {
            console.log("All good!");
        }
    }

    return (
        <Box>
            <h2>LOGIN</h2>
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
                    onFocus={() => setUsernameError(false)}
                    error={usernameError}
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
                    onFocus={() => setPasswordError(false)}
                    error={passwordError}
                    required
                />
                <br />
                <div align="center">
                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                </div>
                <br />
                <Button variant="contained" type="submit" onClick={handleSubmit}>LOGIN</Button>
            </FormControl>
        </Box>
    )
}

export default Login;
