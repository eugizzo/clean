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
import Sensor_activities from "./dashboard/Analytics/Sensor_activities";
import Pending_schedules from "./dashboard/schedules/Pending_schedules";
import Table from "./dashboard/schedules/Table";
import Served_schedules from "./dashboard/schedules/Served_schedules";



const App = () => (
  
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/home/waste_map" element={<Waste_map />} />
        <Route path="/home/waste_activities" element={<Waste_activities/>} />
        <Route path="/analytics/Waste_levels" element={<Waste_levels/>} />
        <Route path="/analytics/sensor_activities" element={<Sensor_activities />} />
        <Route path="/schedules/pending_schedules" element={<Pending_schedules />} />
        <Route path="/schedules/served_schedules" element={<Served_schedules />} />
        <Route path="/table" element={<Table />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/SuperAdmin" element={<AdminLogin />} />
       
        <Route path="/notf" element={<Notifications />} />
      </Routes>
    </Router>
  
);

export default App;
