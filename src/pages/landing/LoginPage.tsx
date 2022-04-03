import {
  LandingMainBox,
  LandingFormBox,
  LandingLoginForm,
} from "../../components";

export default function LoginPage(): JSX.Element {
  return (
    <LandingMainBox>
      <LandingFormBox>
        <LandingLoginForm />
      </LandingFormBox>
    </LandingMainBox>
  );
}
