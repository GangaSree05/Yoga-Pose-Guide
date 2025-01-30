import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Easy from "./Components/Easy";
import Medium from "./Components/Medium";
import Hard from "./Components/Hard";


const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/easy" element={<Easy/>}></Route>
         <Route path="/medium" element={<Medium/>}></Route>
          <Route path="/hard" element={<Hard/>}></Route>
        </Routes>
      </Router>
   
  );
};

export default App;
