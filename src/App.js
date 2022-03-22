import { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { API_URL, THEME } from './config/config';
import { UserContext, CacheContext } from "./config/context";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Loading from "./pages/Loading";
import axios from "axios";


const Main = lazy(() => import("./pages/Main"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Logout = lazy(() => import("./pages/Logout"));
const Chat = lazy(() => import("./pages/Chat"));
const Messages = lazy(() => import("./pages/Messages"));
const Settings = lazy(() => import("./pages/Settings"));
const Me = lazy(() => import("./pages/Me"));

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
            setUser(res.data);
            axios.defaults.headers.common['Authorization'] = res.data.token;
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
                      <Route path="/" element={<Suspense fallback={<Loading />}>
                        <Main />
                      </Suspense>} />
                      <Route path="/me" element={<Suspense fallback={<Loading />}>
                        <Me />
                      </Suspense>} />
                      <Route path="/settings" element={<Suspense fallback={<Loading />}>
                        <Settings />
                      </Suspense>} />
                      <Route path="/messages" element={
                        <Suspense fallback={<Loading />}>
                          <Messages />
                        </Suspense>} />
                      <Route path="/chat/:chatID" element={
                        <Suspense fallback={<Loading />}>
                          <Chat />
                        </Suspense>
                      } />
                      <Route path="/logout" element={<Suspense fallback={<Loading />}>
                        <Logout logout={logout} />
                      </Suspense>} />
                    </>
                    ) :
                    // NOT LOGGED IN
                    (
                      <>
                        <Route path="/" element={<Suspense fallback={<Loading />}>
                          <Home />
                        </Suspense>} />
                        <Route path="/login" element={<Suspense fallback={<Loading />}>
                          <Login login={login} />
                        </Suspense>} />
                        <Route path="/signup" element={<Suspense fallback={<Loading />}>
                          <Signup login={login} />
                        </Suspense>} />
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
