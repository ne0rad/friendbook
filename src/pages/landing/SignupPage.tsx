import {
  LandingMainBox,
  LandingFormBox,
  LandingSignupForm,
} from "../../components";

export default function LoginPage(): JSX.Element {
  return (
    <LandingMainBox>
      <LandingFormBox>
        <LandingSignupForm />
      </LandingFormBox>
    </LandingMainBox>
  );
}
