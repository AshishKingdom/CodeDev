import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const ProblemsPage = () => {
  sessionStorage.setItem("menu", "Problems");
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default ProblemsPage;
