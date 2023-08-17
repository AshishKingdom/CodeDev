/* eslint-disable react/prop-types */
import tryLogin from "./loginFetch.js";
import LoginErrorMessage from "./LoginErrorMessage.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLoginButton = ({ userData }) => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  return (
    <>
      <center>
        <button
          className="btn-dark"
          onClick={() => {
            tryLogin(userData[0], userData[1], setErrMsg ,navigate) ;
          }}
        >
          Login Now
        </button>
      </center>
      <LoginErrorMessage message={errMsg} />
    </>
  );
};

export default UserLoginButton;
