import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../NotFoundPage";
import LoadingPage from "../LoadingPage";
import { MainBox } from "../components";

const MainPage = lazy(() => import("./MainPage"));
const ProfilePage = lazy(() => import("../Profile/ProfilePage"));

export default function MainRouter(): JSX.Element {
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
