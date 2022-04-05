import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../NotFoundPage";
import LoadingPage from "../LoadingPage";

const LandingPage = lazy(() => import("./LandingPage"));
const LoginPage = lazy(() => import("./LoginPage"));
const SignupPage = lazy(() => import("./SignupPage"));

export default function LandingRouter(): JSX.Element {
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
