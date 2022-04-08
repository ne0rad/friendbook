import { Box, AppBar, Toolbar } from "@mui/material";
import { HeaderButtons, HeaderMenu, HeaderTitleText } from "./components";

export default function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <HeaderTitleText />
          <Box sx={{ flexGrow: 1 }} />
          <HeaderButtons />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
