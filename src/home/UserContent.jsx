import { Link } from "react-router-dom";

const UserContent = () => {
  return (
    <>
      <div className="main-content-home">
        <div className="illus-content"></div>
        <div className="welcome-text">
          Welcome <br />
          Back,
          <br />
          <p className="special-head">{localStorage.getItem("usr")}</p>
        </div>
        <div className="user-content">
          <br />
          <br />
          <div>
            Take on our diverse collection of coding challenges to sharpen your
            skills and expand your programming horizons. From beginner-friendly
            puzzles to advanced algorithmic problems, we have something for
            everyone.
          </div>
          <Link to="/problems">
            <button className="btn-dark">PRACTICE</button>
          </Link>
          <br />
          <br />
          <div>
            Get ready to put your coding prowess to the test! Participate in our
            thrilling contests and compete against fellow programmers from
            around the world.
          </div>
          <Link to="/contests">
            <button className="btn-dark">COMPETE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserContent;
