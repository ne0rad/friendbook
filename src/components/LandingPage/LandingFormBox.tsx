import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function LandingFormBox({ children }: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "300px",
        mb: 3,
        border: {
          sm: "1px solid #ccc",
          xs: "none",
        },
        p: 3,
        borderRadius: "5px",
      }}
    >
      {children}
      <Button sx={{ mt: 3 }} fullWidth onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Box>
  );
}
