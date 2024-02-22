import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="group-154">
        <div className="circle-logo-4"></div>
        <div className="sensy">SENSY</div>
      </div>

      <div className="frame-427318937">
        <div className="frame-427318940">
          <div className="frame-427318934">
            <div className="frame-427318931">
              <div className="frame-14">
                <div className="group-3"></div>
                <input className="id" type="text" placeholder="ID" />
              </div>

              <div className="frame-15">
                <div className="group-7"></div>
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn">Login</button>

      <div className="frame-427318939">
        <div className="find-id">Find ID (email)</div>
        <div className="line-4"></div>
        <div className="find-password">Find a password</div>
        <div className="line-3"></div>
        <div className="sign-up">Sign up</div>
      </div>

      <div className="frame-427318941">
        <div className="google-login">
          <div className="icon-google"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="sign-in-google">Sign in with Google</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
