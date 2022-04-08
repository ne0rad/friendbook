import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";

const LandingPage = lazy(() => import("../pages/Landing/LandingPage"));
const LoginPage = lazy(() => import("../pages/Landing/LoginPage"));
const SignupPage = lazy(() => import("../pages/Landing/SignupPage"));

export default function LandingPageRouter(): JSX.Element {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
