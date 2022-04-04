import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function FormBox({ children }: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: {
          sm: "330px",
          xs: "100%",
        },
        width: "100%",
        backgroundColor: "#fff",
        border: {
          sm: "1px solid #ccc",
          xs: "none",
        },
        borderRadius: "5px",
      }}
    >
      {children}
      <Button sx={{ mt: 0 }} fullWidth onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Box>
  );
}
