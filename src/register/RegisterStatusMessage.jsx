/* eslint-disable react/prop-types */
const RegisterStatusMessage = ({ message, isError }) => {
  return (
    <>
      <center>
        <div
          className={isError ? "box-error" : "box-success"}
          id="reg-error-msg"
          style={{ visibility: message?.length == 0 ? "hidden" : "visible" }}
        >
          {message}
        </div>
      </center>
    </>
  );
};

export default RegisterStatusMessage;
