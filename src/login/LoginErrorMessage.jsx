/* eslint-disable react/prop-types */
const LoginErrorMessage = ({ message }) => {
  return (
    <>
      <center>
        <div
          className="box-error"
          id="login-error-msg"
          style={{ visibility: message?.length == 0 ? "hidden" : "visible" }}
        >
          {message}
        </div>
      </center>
    </>
  );
};

export default LoginErrorMessage;
