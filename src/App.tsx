import Router from "src/components/router";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";
import CategoryPage from "./category/CategoryPage";

function App() {
  return (
    <div>
      <Router />
      <LoginPage />
      <SignUpPage />
      <CategoryPage />
    </div>
  );
}

export default App;
