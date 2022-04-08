import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainBox } from "./Landing/components";

export default function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <MainBox>
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="h2" align="center">
        Page not found
      </Typography>
      <Button onClick={() => navigate('/')} size="large" sx={{ mt: 2 }}>
        Go Back
      </Button>
    </MainBox>
  );
}
