import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import DefaultContent from "./DefaultContent";
import UserContent from "./UserContent";

const Home = () => {
  sessionStorage.setItem("menu", "Home");
  if (localStorage.getItem("token") == null) {
    return (
      <>
        <Navbar />
        <DefaultContent />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <UserContent />
        <Footer />
      </>
    );
  }
};

export default Home;
