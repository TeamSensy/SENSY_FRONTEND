import Router from "src/components/router";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";

function App() {
  return (
    <div>
      <Router />
      <LoginPage />
      <SignUpPage />
    </div>
  );
}

export default App;
