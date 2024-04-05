import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignUpPage from "../SignUp/SignUpPage";
import LoginPage from "../Login/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Router;
