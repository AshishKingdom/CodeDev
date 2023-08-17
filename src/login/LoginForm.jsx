import InputPassword from "./InputPassword";
import InputUsername from "./InputUsername";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ userData }) => {
  const [data1, data2] = userData;
  const [username, setUsername] = data1;
  const [psw, setPsw] = data2;
  return (
    <>
      <form>
        <InputUsername data={username} setData={setUsername} />
        <InputPassword data={psw} setData={setPsw} />
      </form>
    </>
  );
};

export default LoginForm;
