

import  React from "react";
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from './components/LandingPages';
import Login from "./components/Login";


function App() {
  return (
    <div >
    

    <Router>
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/login" element={<Login />} />
      
     
    </Routes>
  </Router>

    </div>
  );
}
export default App;
