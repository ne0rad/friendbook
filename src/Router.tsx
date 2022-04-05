import { Route, Routes } from "react-router-dom";
import { LandingRouter, MainRouter, NotFoundPage } from "./pages";

type Props = {
  loggedIn: boolean;
};

export default function Router({ loggedIn }: Props): JSX.Element {
  return (
    <Routes>
      {loggedIn ? (
        <Route path="/*" element={<MainRouter />} />
      ) : (
        <Route path="/*" element={<LandingRouter />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
