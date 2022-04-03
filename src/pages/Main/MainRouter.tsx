import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import MainPage from "./MainPage";

export default function MainRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
