import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Register = () => {
  sessionStorage.setItem("menu", "Register");
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Register;
