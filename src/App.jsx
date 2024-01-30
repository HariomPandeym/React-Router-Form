import { useState } from "react";
// import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  return (
    <div>
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setisLoggedin={setisLoggedin}/>} />
        <Route path="/Signup" element={<Signup setisLoggedin={setisLoggedin}/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
