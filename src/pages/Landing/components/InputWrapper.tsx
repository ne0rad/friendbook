import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function InputWrapper({ children }: Props): JSX.Element {
  return <Box sx={{ height: "50px", width: "100%" }}>{children}</Box>;
}
