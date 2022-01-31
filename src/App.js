import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';
import { TokenContext } from "./config/context";
import { API_URI } from "./config/config";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Me from "./pages/Me";
import Loading from "./pages/Loading";

function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on page load and set token and user accordingly
  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      login(storageToken);
    } else {
      setLoading(false);
    }
    return () => {
      setToken(null);
    }
  }, []);

  // Login user and set token and user
  function login(reqToken) {
    setLoading(true);
    axios.get(API_URI + "/user/get_user", {
      headers: {
        Authorization: `Bearer ${reqToken}`
      }
    })
      .then(res => {
        if (res.status !== 200) {
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        } else {
          setToken(reqToken);
          setUser(res.data);
          localStorage.setItem('token', reqToken);
        }
        setLoading(false);
      })

      .catch(err => {
        console.log(err);
        localStorage.removeItem('token');
        setLoading(false);
      });
  }

  // Logout user and set token and user to null
  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  }

  return (
    <ThemeProvider theme={THEME}>
      <TokenContext.Provider value={token}>
        {loading ? <Loading /> : (
          <>
            <Navbar logout={logout} />
            <Container maxWidth="lg" mt="1rem" p="0" align="center">
              <Routes>

                {token ?
                  // LOGGED IN
                  (<>
                    <Route path="/" element={<Main user={user} />} />
                    <Route path="/me" element={<Me />} />
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
          </>
        )}
      </TokenContext.Provider>
    </ThemeProvider>
  );
}

export default App;
