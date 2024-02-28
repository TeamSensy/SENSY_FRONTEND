import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./SignUp/SignUpPage";
import CategoryPage from "./category/CategoryPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" Component={LoginPage} />
      </Router>
      <SignUpPage />
      <CategoryPage />
    </div>
  );
}

export default App;
