import Router from "./Router";
import { AuthContext } from "./context";
import { useCallback, useEffect, useState } from "react";
import { LoadingPage } from "./pages";
import axios from "axios";
import { API_URI } from "./config";
import { useNavigate } from "react-router-dom";

export default function App(): JSX.Element {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const tokenLogin = useCallback(
    async (token: string) => {
      setLoading(true);
      const res = await axios.post(`/auth/token_login`, { token });

      if (res.status === 200) {
        setLoggedIn(true);
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = token;
      } else {
        setLoggedIn(false);
        localStorage.removeItem("token");
      }

      navigate("/");
      setLoading(false);
    },
    [navigate]
  );

  useEffect(() => {
    axios.defaults.baseURL = API_URI;
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenLogin(token);
    }
    setLoading(false);
  }, [tokenLogin]);

  function authContextLogout(): void {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  function authContextLogin(token: string): void {
    tokenLogin(token);
  }

  return (
    <AuthContext.Provider
      value={{ loggedIn, login: authContextLogin, logout: authContextLogout }}
    >
      {!loading ? <Router loggedIn={loggedIn} /> : <LoadingPage />}
    </AuthContext.Provider>
  );
}