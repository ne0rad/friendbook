import { Button, FormControl, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [password2Error, setPassword2Error] = useState(false);



    function handleSubmit() {
        let errors = false;
        if (username.length < 1) {
            errors = true;
            setUsernameError(true);
        }
        if (password.length < 1) {
            errors = true;
            setPasswordError(true);
        }
        if (password2 !== password) {
            errors = true;
            setPassword2Error(true);
        }
        if (!errors) {
            console.log('Success, send request to api');
        }
    }

    return (
        <Box>
            <h2>SIGNUP</h2>
            <br />
            <FormControl variant="standard">
                <TextField
                    id="username"
                    variant="outlined"
                    size="small"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={usernameError}
                    onFocus={() => setUsernameError(false)}
                    required
                />
                <br />
                <TextField
                    id="password"
                    variant="outlined"
                    size="small"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                    onFocus={() => setPasswordError(false)}
                    required
                />
                <br />
                <TextField
                    id="password2"
                    variant="outlined"
                    size="small"
                    label="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    error={password2Error}
                    onFocus={() => setPassword2Error(false)}
                    required
                />
                <br />
                <br />
                <Button variant="contained" onClick={handleSubmit}>Signup</Button>
            </FormControl>
            <br />
            <br />
            <p>Already have an account? Please <Link to="/login">Login Here</Link></p>
        </Box>
    )
}

export default Signup;