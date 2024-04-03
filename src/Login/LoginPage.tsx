import React, { useState } from "react";
import Content from "../components/ContentPage/Content";
// import { useHistory } from "react-router-dom";
import "./Login.css";

const LoginPage: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();

  const handleLogin = () => {
    // const validId = /^[a-zA-Z0-9_]+$/.test(id);

    if (id === "example" && password === "password") {
      // 로그인 성공
      alert("로그인 성공!");
    } else {
      // 로그인 실패
      setErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleForgotId = () => {
    alert("아이디(이메일)을 찾습니다.");
  };

  const handleForgotPassword = () => {
    alert("비밀번호를 재설정합니다.");
  };

  const handleSignUp = () => {
    // 회원가입 페이지로
    // history.push("/SignUp/SignUpPage"); 
  };

  return (
    <div className="login-page">
      <Content />
      {/* <div className="logo-container">
        <div className="circle-logo"></div>
        <div className="brand-name">SENSY</div>
      </div>

      <div className="input-container">
        <div className="input-group">
          <input
            className="input-field"
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <div className="error-message">{errorMessage}</div>

        <div className="links-container">
          <div className="link" onClick={handleForgotId}>
            Find ID (email)
          </div>
          <div className="divider"></div>
          <div className="link" onClick={handleForgotPassword}>
            Find a Password
          </div>
          <div className="divider"></div>
          <div className="link" onClick={handleSignUp}>
            Sign up
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LoginPage;
