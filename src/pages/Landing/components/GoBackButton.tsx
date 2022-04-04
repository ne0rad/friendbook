import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <Button sx={{ mt: 0 }} fullWidth onClick={() => navigate("/")}>
      Go Back
    </Button>
  );
}
