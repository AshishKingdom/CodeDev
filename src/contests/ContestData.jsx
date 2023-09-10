import { useQuery } from "@tanstack/react-query";
import fetchContests from "./fetchContests";
import { Link } from "react-router-dom";
const ContestData = ({ flag, title }) => {
  const { data, status } = useQuery(["contests", flag], fetchContests);
  return (
    <>
      <div className="contest-data">
        <h1 className="underline-heading">{title}</h1>
        <table align="center" width={"80%"} className="table-style">
          <tbody>
            <tr className="table-heading" align="center">
              <td>ID</td>
              <td>CONTEST NAME</td>
              <td>STARTS</td>
              <td>DURATION</td>
              <td>ENDS IN</td>
            </tr>

            {status == "loading" && (
              <tr>
                <td colSpan={5}>
                  <center>
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </center>
                </td>
              </tr>
            )}

            {status == "error" && (
              <tr>
                <td colSpan={5}>
                  <center>
                    <div className="box-error">
                      Error fetching data from the server
                    </div>
                  </center>
                </td>
              </tr>
            )}

            {status == "success" &&
              (data?.length == 0 ? (
                <tr align="center">
                  <td colSpan={5}>No data available...</td>
                </tr>
              ) : (
                data.map((c) => {
                  return (
                    <>
                      <tr align="center" key={c?.id}>
                        <td>{c?.id}</td>
                        <td>
                          <Link to={"/contest/" + c?.id}>
                            {c?.name?.toUpperCase()}
                          </Link>
                        </td>
                        <td>
                          {new Date(c?.start * 1000).toLocaleString()} (IST)
                        </td>
                        <td>
                          {Math.floor((c?.end - c?.start) / 60)} minute(s)
                        </td>
                        <td>
                          {new Date(c?.end * 1000).toLocaleString()} (IST)
                        </td>
                      </tr>
                    </>
                  );
                })
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContestData;
