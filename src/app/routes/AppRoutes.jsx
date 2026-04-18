import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
