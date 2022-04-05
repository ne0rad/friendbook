import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../NotFoundPage";
import LoadingPage from "../LoadingPage";

const MainPage = lazy(() => import("./MainPage"));

export default function MainRouter(): JSX.Element {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
