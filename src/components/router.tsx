import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React from "react";
import SignUpPage from "../SignUp/SignUpPage";
import LoginPage from "../LogIn/LoginPage";
import GlobalStyle from "src/styles/global.style";
import MainPage from "src/pages/MainPage/MainPage";
import UserPage from "src/pages/UserPage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myPage" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
