import { useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";



function App() {

  const [user, setUser] = useState();

  function login(username, token) {
    setUser({ username: username, token: token });
  }

  return (
    <ThemeProvider theme={THEME}>
      <Navbar user={user} />
      <Container maxWidth="lg" mt="1rem" align="center">
        <Routes>

          {user ?
            // LOGGED IN
            (<>
              <Route path="/" element={<Main user={user}/>} />
              <Route path="/profile" element={<Profile user={user}/>} />
            </>
            ) :
            // NOT LOGGED IN
            (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/signup" element={<Signup login={login} />} />
              </>
            )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
