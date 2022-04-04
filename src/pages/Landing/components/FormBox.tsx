import { Box } from "@mui/system";
import { GoBackButton } from ".";

type Props = {
  children: React.ReactNode;
};

export default function FormBox({ children }: Props): JSX.Element {
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
      <GoBackButton />
    </Box>
  );
}
