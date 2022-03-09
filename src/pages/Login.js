import { TextField, FormControl, Button, Paper, Box, Divider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocketContext } from '../config/socket';

function Login({ login }) {

    const navigate = useNavigate();
    const socket = useContext(SocketContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [loading, setLoading] = useState(false);

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
            setLoading(true);
            socket.emit('login', { username: username, password: password }, (err, res) => {
                setLoading(false);
                if (err) {
                    console.log(err);
                    setUsernameError(err);
                } else if (res) {
                    login(res);
                }
            });
        }
    }

    return (
        <Box maxWidth="sm">
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h3" fontSize="24px" fontWeight="500">LOGIN</Typography>
                <br />
                <Divider />
                <br />
                <FormControl variant="standard" component="form" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <TextField
                        id="username"
                        label="Username"
                        value={username}
                        variant="outlined"
                        size="small"
                        onChange={(e) => setUsername(e.target.value)}
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
                        onKeyDown={() => setPasswordError(false)}
                        error={passwordError ? true : false}
                        helperText={passwordError}
                        required
                    />
                    <br />
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
