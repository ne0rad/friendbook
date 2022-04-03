import { Typography } from "@mui/material";
import {
  LandingMainBox,
  LandingTitleText,
  LandingAuthButtons,
} from "../../components";

export default function LandingPage(): JSX.Element {
  return (
    <LandingMainBox>
      <LandingTitleText />

      <Typography variant="overline" align="center">
        Fully featured social network made using React and NodeJS
      </Typography>

      <LandingAuthButtons />
    </LandingMainBox>
  );
}
