import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import "./SignUp.css";
import iimmgg from "../assets/img/bgimg.svg";
import logo from "../assets/img/circle logo 4.svg";
import idimg from "../assets/img/idimg.svg";
import pwimg from "../assets/img/pwimg.svg";
import bdimg from "../assets/img/birthdayimg.svg";
import nmimg from "../assets/img/nameimg.svg";
import ntimg from "../assets/img/nationalimg.svg";

const SignUpPage: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");

  const handleSignUp = () => {};

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    const { value } = e.target;
    setter(value);
  };

  return (
    <div className="signup-page">
      <img src={iimmgg} className="bgimg" />
      <div className="logo-group">
        <img src={logo} className="logo" />
        <h3 className="logoo"> SENSY </h3>
      </div>
      <div className="input-field">
        <img src={idimg} />
        <input
          className="id"
          type="text"
          value={id}
          onChange={(e) => handleChange(e, setId)}
          placeholder="ID"
        />
        <img src={pwimg} />
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          placeholder="Password"
        />
        <img src={pwimg} />
        <input
          className="Verify"
          type="password"
          value={verifyPassword}
          onChange={(e) => handleChange(e, setVerifyPassword)}
          placeholder="Verify Password"
        />
        <img src={bdimg} />
        <input
          className="Birthday"
          type="text"
          value={birthday}
          onChange={(e) => handleChange(e, setBirthday)}
          placeholder="Birthday"
        />
        <img src={nmimg} />
        <input
          className="Name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          placeholder="Name"
        />
        <img src={ntimg} />
        <input
          className="Nationality"
          type="text"
          value={nationality}
          onChange={(e) => handleChange(e, setNationality)}
          placeholder="Nationality"
        />
        <input
          className="profile"
          type="file"
          accept="image/*"
          placeholder="profile image"
        />
        <button className="signup-button" onClick={handleSignUp}>
          <p className="signUp">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
