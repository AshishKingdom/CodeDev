import { useState } from "react";
import UserInputs from "./UserInputs";
import registerUser from "./registerUser";
import RegisterErrorMessage from "./RegisterStatusMessage";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cnf_password: "",
    college: "",
  });
  const [status, setStatus] = useState({
    isError: false,
    message: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="reg-form-box-container">
        <div className="form-box">
          <div className="form-box-header">Register</div>
          <form>
            <UserInputs userData={userInfo} setUserData={setUserInfo} />
            <center>
              <button
                type="submit"
                className="btn-dark"
                onClick={async (e) => {
                  e.preventDefault();
                  const regSucc = await registerUser(userInfo, setStatus);
                  if (regSucc) {
                    setTimeout(() => navigate("/login"), 5000);
                  }
                }}
              >
                Register Now
              </button>
            </center>
            <RegisterErrorMessage
              message={status.message}
              isError={status.isError}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
