import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";


import Acts from "./pages/Acts";
import AptitudeSections from "./pages/AptitudeSections";
import VISTOFYPage from "./components/VISTOFYPage";
import Syla from "./pages/Syla";
import OOPPage from "./components/OOPPae";

// 🔥 Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All Companies" element={<Acts />} />
        <Route path="/View All Companies" element={<Acts />} />
        <Route path="/Prepare" element={<AptitudeSections />} />
        <Route path="/Notes" element={<Syla />} />
        <Route path="/resoc" element={<VISTOFYPage />} />
        <Route path="/previewnotes" element={<OOPPage />} />

        {/* 🔐 Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
