import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import { ThemeProvider } from '@mui/material/styles';
import { THEME } from './config/config';



function App() {


  return (
    <ThemeProvider theme={THEME}>
      <Navbar />
      <Container maxWidth="lg" mt="1rem" align="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
