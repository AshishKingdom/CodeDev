import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import LoginForm from "./LoginForm";

const Login = () => {
  sessionStorage.setItem("menu", "Login");
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
