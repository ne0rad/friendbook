import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function MainBox({ children }: Props): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          sm: "center",
          xs: "flex-start",
        },
        height: "100vh",
        width: "100vw",
        minWidth: "260px",
        minHeight: "500px",
        m: 0,
        px: {
          sm: 1,
          xs: 0,
        },
      }}
    >
      {children}
    </Box>
  );
}
