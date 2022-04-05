import { Route, Routes } from "react-router-dom";
import { LandingRouter, LoadingPage, MainRouter, NotFoundPage } from "./pages";

type Props = {
  loggedIn: boolean;
  loading: boolean;
};

export default function Router({ loggedIn, loading }: Props): JSX.Element {
  return (
    <Routes>
      {loading ? (
        <LoadingPage />
      ) : loggedIn ? (
        <Route path="/*" element={<MainRouter />} />
      ) : (
        <Route path="/*" element={<LandingRouter />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
