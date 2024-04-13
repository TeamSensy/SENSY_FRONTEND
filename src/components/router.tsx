import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignUp from "../SignUp/SignUpPage";
import LoginPage from "../LogIn/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Router;
