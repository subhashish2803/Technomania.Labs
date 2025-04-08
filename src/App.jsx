import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Documentations from "./documents/Documentations";
import Act from "./components/Act";
import Acts from "./pages/Acts";
import AptitudeSections from "./pages/AptitudeSections";
import VISTOFYPage from "./components/VISTOFYPage";
import Syla from "./pages/Syla";
import OOPPage from "./components/OOPPae";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All Companies" element={<Acts />} />
      <Route path="/View All Companies" element={<Acts />} />
      <Route path="/Prepare" element={<AptitudeSections />} />
      <Route path="/Notes" element={<Syla/>} />
      <Route path="/resoc" element={<VISTOFYPage />} />
      <Route path="/previewnotes" element={<OOPPage />} />
      
    </Routes>
    
    
  
    </>
  );
}

export default App;
