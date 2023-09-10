import "./static/style.css";

import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./home/Home";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Register from "./register/Register";
import ProblemsPage from "./problems/Problems";
import ContestsPage from "./contests/Contests";
import SingleContestInfo from "./contests/SingleContestInfo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60000, cacheTime: 300000 },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/contest/:contest_id" element={<SingleContestInfo />} />
          <Route path="/problems" element={<ProblemsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
