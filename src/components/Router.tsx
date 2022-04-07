import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { LandingRouter, LoadingPage, MainRouter, NotFoundPage } from "../pages";

export default function Router(): JSX.Element {
  const auth = useContext(AuthContext);

  return auth.loading ? (
    <LoadingPage />
  ) : (
    <Routes>
      {auth.loggedIn ? (
        <Route path="/*" element={<MainRouter />} />
      ) : (
        <Route path="/*" element={<LandingRouter />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
