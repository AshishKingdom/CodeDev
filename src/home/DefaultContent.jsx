import { Link } from "react-router-dom";
const DefaultContent = () => {
  return (
    <>
      <div className="main-content-home">
        <div className="illus-content"></div>
        <div className="tagline-text">
          LEARN
          <br />
          PRACTICE
          <br />
          <b>
            <span className="txt-fg-1">CODE</span>
          </b>
        </div>
        <div className="site-info">
          <div>
            CodeDev is an innovative website designed to empower students and
            passionate programmers to enhance their coding skills. With a range
            of interactive coding challenges and exercises, users can practice
            various programming languages and algorithms. Additionally, We
            offers exciting contests and competitions, providing a platform for
            participants to showcase their abilities and learn from their peers
            in a collaborative environment.
          </div>
        </div>
        <div className="login-reg-section">
          <Link to="/login">
            <button className="btn-dark">LOGIN</button>
          </Link>
          <Link to="/register">
            <button className="btn-light">REGISTER</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DefaultContent;
