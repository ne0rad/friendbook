import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function MainBox({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        minWidth: "300px"
      }}
    >
      {children}
    </Box>
  );
}
