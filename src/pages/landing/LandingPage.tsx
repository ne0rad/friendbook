import {
  LandingMainBox,
  LandingTitleText,
  LandingAuthButtons
} from "../../components";

export default function LandingPage(): JSX.Element {
  return (
    <LandingMainBox>
      <LandingTitleText />
      <LandingAuthButtons />
    </LandingMainBox>
  );
}
