import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeaderTitleText(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate("/")}
      variant="h6"
      component="div"
      sx={{ cursor: "pointer" }}
    >
      {"FriendBook"}
    </Typography>
  );
}
