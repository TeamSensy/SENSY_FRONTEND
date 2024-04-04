import React, { useState } from "react";
import "./Login.css";
import logo from "../img/circle logo 4.svg";
import loginimg from "../img/loginimg.png";
import pwimg from "../img/pwimg.png";
import bgimg from "../img/bgimg.svg";

const LoginPage: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
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
    //회원가입 페이지로 이동...
  };

  return (
    <div>
      <img src={bgimg} className="img" alt="backgroundimage" />
      <div className="login-page">
        <img className="circle-logo" src={logo} alt="logoimage" />
        <div className="brand-name">SENSY</div>
        <div className="input-container">
          <div className="input-group">
            <img src={loginimg} className="loginimg" alt="" />
            <input
              className="input-field"
              type="text"
              placeholder="ID"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <img src={pwimg} alt="passwordimage" />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            <p className="Login"> Log in </p>
          </button>
          <div className="error-message">{errorMessage}</div>
          <div className="links-container">
            <a className="link" onClick={handleForgotId}>
              Find ID (email) |
            </a>
            <a className="link" onClick={handleForgotPassword}>
              Find a Password |
            </a>
            <a className="link" onClick={handleSignUp}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
