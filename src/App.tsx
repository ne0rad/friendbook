import Router from "./Router";

const loggedIn : boolean = false;

export default function App(): JSX.Element {
  return (
    <>
      <Router loggedIn={loggedIn} />
    </>
  );
}
