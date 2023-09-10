import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import ContestData from "./ContestData";

const ContestsPage = () => {
  sessionStorage.setItem("menu", "Contests");
  return (
    <>
      <Navbar />
      <br/><br/><br/><br/>
      <ContestData flag="present" title="Ongoing Contests" />
      <ContestData flag="future" title="Upcoming Contests" />
      <ContestData flag="past" title="Past Contests" />
      <Footer />
    </>
  );
};

export default ContestsPage;
