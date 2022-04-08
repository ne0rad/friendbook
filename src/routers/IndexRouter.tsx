import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { LandingPageRouter, MainPageRouter } from ".";
import { NotFoundPage, LoadingPage } from "../pages";

export default function IndexRouter(): JSX.Element {
  const auth = useContext(AuthContext);

  return auth.loading ? (
    <LoadingPage />
  ) : (
    <Routes>
      {auth.loggedIn ? (
        <Route path="/*" element={<MainPageRouter />} />
      ) : (
        <Route path="/*" element={<LandingPageRouter />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
