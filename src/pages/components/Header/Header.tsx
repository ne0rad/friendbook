import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            {"FriendBook"}
          </Typography>

          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
