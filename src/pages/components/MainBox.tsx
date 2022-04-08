import { Box } from "@mui/material";
import Header from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function MainBox({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <Box
        sx={{
          textAlign: "center",
          minWidth: "320px",
        }}
      >
        {children}
      </Box>
    </>
  );
}
