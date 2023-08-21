import LoginForm from "./LoginForm";
import { useState } from "react";
import UserLoginButton from "./UserLoginButton";
import LoginBoxFooter from "./LoginBoxFooter";

const LoginBox = () => {
  const username = useState("");
  const psw = useState("");

  return (
    <>
      <div className="form-box-container">
        <div className="form-box">
          <div className="form-box-header">Login</div>
          <LoginForm userData={[username, psw]} />
          <UserLoginButton userData={[username[0], psw[0]]} />
          <LoginBoxFooter />
        </div>
      </div>
    </>
  );
};

export default LoginBox;
