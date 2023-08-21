import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import RegisterForm from "./RegisterForm";

const Register = () => {
  sessionStorage.setItem("menu", "Register");
  return (
    <>
      <Navbar />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
