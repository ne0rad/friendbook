import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { API_URL, THEME } from './config/config';
import { UserContext, CacheContext } from "./config/context";
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
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);
  const [cache, setCache] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  // Login from local storage
  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    axios.defaults.baseURL = API_URL;

    if (storageToken) {

      axios.post("/auth/token_login", { token: storageToken })
        .then((res) => {
          if (res.status === 200) {
            setUser(res);
            axios.defaults.headers.common['Authorization'] = res.token;
          }
        })
        .catch((err) => {
          setUser(null);
          localStorage.removeItem('token');
          clearCache();
        })
        .then(() => {
          setLoading(false);
        })

    } else {
      
      setLoading(false);
      setUser(null);
      clearCache();
    }
  }, []);

  function login(res) {
    setUser(res);
    axios.defaults.headers.common['Authorization'] = res.token;
    localStorage.setItem('token', res.token);
    navigate('/');
  }

  function clearCache() {
    setCache({});
  }

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
    clearCache();
    navigate('/');
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
