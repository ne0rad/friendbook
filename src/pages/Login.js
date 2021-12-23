import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    function handleEnter(e) {
        if (e.key === 'Enter') {
            console.log('Enter was pressed!');
            handleSubmit();
        }
    }
    function handleSubmit() {
        if(username.length < 1 || password.length < 1) {
            setError(true);
        } else {
            console.log('All good');
        }
    }

    return (
        <Box>
            <h3>LOGIN</h3>
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
                    error={error}
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
                    onFocus={() => setError(false)}
                    error={error}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" onClick={handleSubmit}>LOGIN</Button>
            </FormControl>
        </Box>
    )
}

export default Login;
