import { createContext } from "react";

type AuthContextType = {
  loggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;
