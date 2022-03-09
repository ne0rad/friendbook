import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';
import { SocketContext, socket } from "./config/socket";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Me from "./pages/Me";
import Loading from "./pages/Loading";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Messages from "./pages/Messages";
import Chat from "./pages/Chat";

function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Check if user is logged in on page load and set token and user accordingly
  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      socket.emit('login', storageToken, (err, res) => {
        if (err) {
          console.log(err);
        } else if (res) {
          setToken(storageToken);
          setUser(res);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
    return () => {
      setToken(null);
    }
  }, []);

  function login(res) {
    setToken(res.token);
    setUser(res.username);
    localStorage.setItem('token', res.token);
    navigate('/');
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/');
  }

  return (
    <ThemeProvider theme={THEME}>
      <SocketContext.Provider value={socket}>
        <Navbar loading={loading} />
        <Container maxWidth="lg" sx={{ mt: 8, mb: 2, p: 1 }} align="center">
          {loading ? <Loading /> : (
            <>
              <Routes>

                {token ?
                  // LOGGED IN
                  (<>
                    <Route path="/" element={<Main user={user} />} />
                    <Route path="/me" element={<Me user={user} />} />
                    <Route path="/settings" element={<Settings user={user} />} />
                    <Route path="/messages" element={<Messages user={user} />} />
                    <Route path="/chat/:chatroom" element={<Chat user={user} />} />
                    <Route path="/logout" element={<Logout logout={logout} />} />
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
            </>
          )}
        </Container>
      </SocketContext.Provider>
    </ThemeProvider>
  );
}

export default App;
