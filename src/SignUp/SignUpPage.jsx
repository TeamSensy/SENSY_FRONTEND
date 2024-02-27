import React, { useState } from "react";
import "./SignUp.css";

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");

  const handleSignUp = () => {
    // 회원가입 처리 로직 작성
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <div className="signup-page">
      <div className="logo-group">
        <div className="circle-logo"></div>
      </div>

      <div className="form-group">
        <input
          type="text"
          value={id}
          onChange={(e) => handleChange(e, setId)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          placeholder="Password"
        />
        <input
          type="password"
          value={verifyPassword}
          onChange={(e) => handleChange(e, setVerifyPassword)}
          placeholder="Verify Password"
        />
        <input
          type="text"
          value={birthday}
          onChange={(e) => handleChange(e, setBirthday)}
          placeholder="Birthday"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          placeholder="Name"
        />
        <input
          type="text"
          value={nationality}
          onChange={(e) => handleChange(e, setNationality)}
          placeholder="Nationality"
        />
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
