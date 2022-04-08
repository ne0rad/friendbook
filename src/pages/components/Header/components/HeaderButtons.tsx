import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function HeaderButtons(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        size="large"
        aria-label="home page"
        onClick={() => navigate("/")}
        color="inherit"
      >
        <HomeIcon />
      </IconButton>
    </>
  );
}
