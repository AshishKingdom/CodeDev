import { Link, useParams } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchContestProblem from "./fetchContestProblem";

const SingleContestInfo = () => {
  sessionStorage.setItem("menu", "Contests");
  const { contest_id } = useParams();
  const { data, status } = useQuery(
    ["problem_list", contest_id],
    fetchContestProblem
  );
  return (
    <>
      <Navbar />
      <div className="geometric-bg">
        <br />
        <br />
        {status == "error" && (
          <div>
            <center>
              <div className="box-error">Error fetching contest details</div>
            </center>
          </div>
        )}
        {status == "loading" && (
          <div>
            <center>
              <h2>Fetching Contest Data</h2>
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </center>
          </div>
        )}
        {status == "success" && (
          <div className="contest-info-box">
            <center>
              <h1>{data?.contest_name?.toUpperCase()}</h1>
              <span>
                <b>Starts</b> :{" "}
                {new Date(data?.contest_start * 1000).toLocaleString()}
                (IST)
              </span>
              <br />
              <span>
                <b>Duration</b> :{" "}
                {Math.floor((data?.contest_end - data?.contest_start) / 60)}{" "}
                minute(s)
              </span>
              <br />
              <br />
            </center>
            <p>{data?.contest_desc}</p>
            <br />
            <h2>Contest Problems: </h2>
            {data?.problems?.length == 0 ? (
              <p>Problems are NOT available for future contests</p>
            ) : (
              <ul>
                {data?.problems?.map((p) => (
                  <li key={`problem-${p?.id}`}>
                    <Link to={`/problem/${p?.id}`}>{p?.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleContestInfo;
