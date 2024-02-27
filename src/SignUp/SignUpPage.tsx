import React, { useState } from "react";
import "./SignUp.css";

const SignUpPage: React.FC = () => {
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
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { value } = e.target;
    setter(value);
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
