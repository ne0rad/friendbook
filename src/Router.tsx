import { Route, Routes } from "react-router-dom";
import { LoadingPage, NotFoundPage } from "./pages";
import React from "react";

const LandingRouter = React.lazy(() => import("./pages/Landing/LandingRouter"));
const MainRouter = React.lazy(() => import("./pages/Main/MainRouter"));

type Props = {
  loggedIn: boolean;
};

export default function Router({ loggedIn }: Props): JSX.Element {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Routes>
        {loggedIn ? (
          <Route path="/*" element={<MainRouter />} />
        ) : (
          <Route path="/*" element={<LandingRouter />} />
        )}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}
