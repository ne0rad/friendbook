import { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';
import { SocketContext, UserContext, CacheContext } from "./config/context";
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

  const [user, setUser] = useState(null);
  const [cache, setCache] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const socket = useContext(SocketContext);


  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      console.log(socket)
      socket.close();
      socket.connect();
      socket.on('connect', () => {
        console.log('Reconnecting...');
        socket.emit('login', { token: storageToken }, (err, res) => {
          setLoading(false);
          if (err) {
            console.log("Couldn't reconnect.");
            localStorage.removeItem('token');
            setUser(null);
            clearCache();
          } else if (res) {
            console.log('Connection restored.');
            setUser(res);
          }
        });
        socket.off('login');
      });
    } else {
      setLoading(false);
    }
    return () => {
      socket.off('connect');
    }
  }, [socket]);

  function login(token) {
    setLoading(true);
    socket.emit('login', { token: token }, (err, res) => {
      setLoading(false);
      if (err) {
        console.log(err);
      } else if (res) {
        setUser(res);
        localStorage.setItem('token', res.token);
        navigate('/');
      }
    });
  }


  function clearCache() {
    setCache({});
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
    clearCache();
    navigate('/');
    socket.disconnect();
    socket.connect();
  }

  return (
    <ThemeProvider theme={THEME}>
      <UserContext.Provider value={user}>
        <CacheContext.Provider value={cache}>
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
        </CacheContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
