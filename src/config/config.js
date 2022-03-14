import { createTheme } from "@mui/material";

// SOCKET SERVER URI ADRESS
export const API_URL = "http://localhost:4000";

// Various theme settings for Material UI
export const THEME = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Ubuntu', sans-serif"
      },
    },
  });
  