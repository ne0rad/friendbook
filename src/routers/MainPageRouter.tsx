import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";
import { MainBox } from "../pages/components";

const MainPage = lazy(() => import("../pages/Main/MainPage"));
const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));

export default function MainPageRouter(): JSX.Element {
  return (
    <MainBox>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MainBox>
  );
}
