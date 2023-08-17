import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import LoginBox from "./LoginBox";

const Login = () => {
  sessionStorage.setItem("menu", "Login");
  return (
    <>
      <Navbar />
      <LoginBox />
      <Footer />
    </>
  );
};

export default Login;
