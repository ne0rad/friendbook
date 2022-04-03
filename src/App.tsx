import { LandingPage, LoginPage, NotFoundPage, SignupPage } from "./pages";
import { Routes, Route } from "react-router-dom";

const loggedIn = false;

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<LandingPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
