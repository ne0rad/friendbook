import { CircularProgress, Box } from "@mui/material";

export default function Loading(): JSX.Element {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}
