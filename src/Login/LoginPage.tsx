// LoginPage.tsx
import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (id === "example" && password === "password") {
      // 로그인 성공
      alert("로그인 성공!");
    } else {
      // 로그인 실패
      setErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleForgotPassword = () => {
    alert("비밀번호를 재설정합니다.");
  };

  const handleSignUp = () => {
    alert("회원가입 페이지로 이동합니다.");
  };

  return (
    <div className="login-page">
      <div className="logo-container">
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
          <div className="link" onClick={handleForgotPassword}>
            Forgot ID (email)
          </div>
          <div className="divider"></div>
          <div className="link" onClick={handleForgotPassword}>
            Forgot Password
          </div>
          <div className="divider"></div>
          <div className="link" onClick={handleSignUp}>
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
