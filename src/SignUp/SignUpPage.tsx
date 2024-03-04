import React, { useState } from "react";
import "./SignUp.css";

const SignUpPage: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");

  const handleSignUp = () => {};

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
        <h3 className="logo"> SENSY </h3>
        <div className="circle-logo"></div>
      </div>

      <div className="form-group">
        <input
          className="id"
          type="text"
          value={id}
          onChange={(e) => handleChange(e, setId)}
          placeholder="ID"
        />
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          placeholder="Password"
        />
        <input
          className="Verify"
          type="password"
          value={verifyPassword}
          onChange={(e) => handleChange(e, setVerifyPassword)}
          placeholder="Verify Password"
        />
        <input
          className="Birthday"
          type="text"
          value={birthday}
          onChange={(e) => handleChange(e, setBirthday)}
          placeholder="Birthday"
        />
        <input
          className="Name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          placeholder="Name"
        />
        <input
          className="Nationality"
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
