import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInputs from "./UserInputs";
import LoginErrorMessage from "./LoginErrorMessage";
import LoginBoxFooter from "./LoginBoxFooter";
import tryLogin from "./loginFetch";

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="form-box-container">
        <div className="form-box">
          <div className="form-box-header">Login</div>
          <form>
            <UserInputs userData={userData} setUserData={setUserData} />
            <LoginErrorMessage message={errMsg} />
            <center>
              <button
                type="sumbit"
                className="btn-dark"
                onClick={async (e) => {
                  e.preventDefault();
                  const loginSucc = await tryLogin(userData, setErrMsg);
                  if (loginSucc) {
                    navigate("/");
                  }
                }}
              >
                Login Now
              </button>
            </center>
          </form>
          <LoginBoxFooter />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
