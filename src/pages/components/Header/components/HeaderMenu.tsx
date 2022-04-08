import { Menu, MenuItem, IconButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu(): JSX.Element {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="menu for current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/profile");
          }}
        >
          {"Profile"}
        </MenuItem>
        <MenuItem onClick={handleClose}>{"Friends"}</MenuItem>

        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            auth.logout();
          }}
        >
          {"Logout"}
        </MenuItem>
      </Menu>
    </>
  );
}
