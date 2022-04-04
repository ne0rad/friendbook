import { FormBox, LoginForm, MainBox } from "./components";

export default function LoginPage(): JSX.Element {
  return (
    <MainBox>
      <FormBox>
        <LoginForm />
      </FormBox>
    </MainBox>
  );
}
