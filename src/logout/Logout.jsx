import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("usr");
    localStorage.removeItem("token");
    navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Logout;
