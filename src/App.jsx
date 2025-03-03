import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Documentations from "./documents/Documentations";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Documentation" element={<Documentations />} />
      
    </Routes>
    
  );
}

export default App;
