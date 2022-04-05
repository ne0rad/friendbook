import { Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context";

export default function MainPage(): JSX.Element {
  const auth = useContext(AuthContext);

  return (
    <Container maxWidth="sm" sx={{textAlign: "center"}}>
      <Typography variant="h4">Under construction</Typography>
      <Button onClick={() => auth.logout()}>Logout</Button>
    </Container>
  );
}
