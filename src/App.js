import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from './components/LandingPages'
// import Waste_map from "./components/pages/Waste_map";
import SiderB from "./dashboard/SiderB";
import Waste_map from "./dashboard/Home/Waste_map";
import Waste_levels from "./dashboard/Analytics/Waste_levels";
import Waste_activities from "./dashboard/Home/Waste_activities";
import Login from "./components/pages/LoginPage/Login";
import AdminLogin from "./components/pages/LoginPage/AdminLogin";
import Notifications from "./dashboard/Navbar/Notifications";



const App = () => (
  
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/home/waste_map" element={<Waste_map />} />
        <Route path="/home/waste_activities" element={<Waste_activities/>} />
        <Route path="/Waste_levels" element={<Waste_levels/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/SuperAdmin" element={<AdminLogin />} />
       
        <Route path="/notf" element={<Notifications />} />
      </Routes>
    </Router>
  
);

export default App;
