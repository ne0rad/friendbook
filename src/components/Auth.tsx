import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../config";
import { AuthContext } from "../context";

type Props = {
  children: JSX.Element;
};

export default function Auth({ children }: Props) {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const tokenLogin = useCallback(async (token: string) => {
    axios
      .post(`/auth/token_login`, { token })
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
          setLoading(false);
          localStorage.setItem("token", res.data.token);
          axios.defaults.headers.common["Authorization"] = token;
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setLoading(false);
        localStorage.removeItem("token");
      });
  }, []);

  useEffect(() => {
    axios.defaults.baseURL = API_URI;
  }, []);

  useEffect(() => {
    if (loading) {
      const token = localStorage.getItem("token");
      if (token) {
        tokenLogin(token);
      } else {
        setLoading(false);
      }
    }
  }, [tokenLogin, loading]);

  function authContextLogout(): void {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  function authContextLogin(token: string): void {
    localStorage.setItem("token", token);
    navigate("/");
    setLoading(true);
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        loading,
        login: authContextLogin,
        logout: authContextLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
