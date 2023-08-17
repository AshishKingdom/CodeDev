import "./static/style.css";

import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./home/Home";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Register from "./register/Register";
import ProblemsPage from "./problems/Problems";
import ContestsPage from "./contests/Contests";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contests" element={<ContestsPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
