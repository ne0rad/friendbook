import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function LandingTextContent(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: {
            sm: 0,
            xs: 2,
          },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            display: "inline",
            fontSize: {
              md: "5rem",
              sm: "4rem",
              xs: "3rem",
            },
          }}
        >
          Friend
        </Typography>
        <Typography
          variant="h2"
          align="center"
          color={blue[700]}
          sx={{
            display: "inline",
            fontSize: {
              md: "5rem",
              sm: "4rem",
              xs: "3rem",
            },
          }}
        >
          Book
        </Typography>
      </Box>
      <Typography variant="overline" align="center">
        Fully featured social network made using React and NodeJS
      </Typography>
    </>
  );
}
