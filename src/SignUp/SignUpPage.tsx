import React, { useState, ChangeEvent } from "react";
import "../SignUp/SignUp.css";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");

  const handleSignUp = () => {
    // 회원가입 처리 로직 작성
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  return (
    <div className="signup-page">
      {/* 로고 */}
      <div className="logo-group">
        <div className="circle-logo"></div>
        <div className="logo-text">SENSY</div>
      </div>
      {/* 회원가입 양식 */}
      <div className="form-group">
        {/* ID 입력 필드 */}
        <input
          type="text"
          value={id}
          onChange={(e) => handleChange(e, setId)}
          placeholder="ID"
        />
        {/* Password 입력 필드 */}
        <input
          type="password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          placeholder="Password"
        />
        {/* Verify Password 입력 필드 */}
        <input
          type="password"
          value={verifyPassword}
          onChange={(e) => handleChange(e, setVerifyPassword)}
          placeholder="Verify Password"
        />
        {/* Birthday 입력 필드 */}
        <input
          type="text"
          value={birthday}
          onChange={(e) => handleChange(e, setBirthday)}
          placeholder="Birthday"
        />
        {/* Name 입력 필드 */}
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          placeholder="Name"
        />
        {/* Nationality 입력 필드 */}
        <input
          type="text"
          value={nationality}
          onChange={(e) => handleChange(e, setNationality)}
          placeholder="Nationality"
        />
        {/* 회원가입 버튼 */}
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
