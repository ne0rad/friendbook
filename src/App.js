import { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';
import { UserContext } from "./config/user";
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
import { SocketContext } from "./config/socket";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  // Check if user is logged in on page load and set token and user accordingly
  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      setLoading(true);
      socket.emit('login', { token: storageToken }, (err, res) => {
        setLoading(false);
        if (err) {
          console.log(err + " --auto-login");
          localStorage.removeItem('token');
        } else if (res) {
          setUser(res);
        }
      });
    }
    return () => {
      setUser(null);
    }
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      if (user) {
        console.log('reconnecting...');
        socket.emit('login', { token: user.token }, (err, res) => {
          if (err) {
            console.log(err + " --auto-login");
            localStorage.removeItem('token');
            setUser(null);
          } else if (res) {
            setUser(res);
          }
        });
      }
    });
    return () => {
      socket.off('connect');
    }
  }, [socket, user]);

  function login(res) {
    setUser(res);
    localStorage.setItem('token', res.token);
    navigate('/');
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
    socket.disconnect();
    socket.connect();
  }

  return (
    <ThemeProvider theme={THEME}>
      <UserContext.Provider value={user}>
        <Navbar loading={loading} />
        <Container maxWidth="lg" sx={{ mt: 8, mb: 2, p: 1 }} align="center">
          {loading ? <Loading /> : (
            <>
              <Routes>

                {user ?
                  // LOGGED IN
                  (<>
                    <Route path="/" element={<Main />} />
                    <Route path="/me" element={<Me />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/chat/:chatroom" element={<Chat />} />
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
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
