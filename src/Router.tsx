import { Route, Routes } from "react-router-dom";
import { LoadingPage, NotFoundPage } from "./pages";
import React from "react";

// Lazy load pages
const LandingRouter: React.ExoticComponent = React.lazy(
  () => import("./pages/Landing/LandingRouter")
);
const MainRouter: React.ExoticComponent = React.lazy(
  () => import("./pages/Main/MainRouter")
);

type Props = {
  loggedIn: boolean;
};

export default function Router({ loggedIn }: Props): JSX.Element {
  return (
    <Routes>
      {loggedIn ? (
        <>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <MainRouter />
              </React.Suspense>
            }
          />
        </>
      ) : (
        <>
          <Route
            path="/*"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <LandingRouter />
              </React.Suspense>
            }
          />
        </>
      )}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
