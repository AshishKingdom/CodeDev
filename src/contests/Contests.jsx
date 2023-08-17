import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const ContestsPage = () => {
  sessionStorage.setItem("menu", "Contests");
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default ContestsPage;
