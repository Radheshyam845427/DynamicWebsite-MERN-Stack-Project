import React from "react";
import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./pages/About";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Navbar from "./Components/navbar";
import PrivateComponent from "./Components/PrivateComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateComponent />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<h1> Logout Component</h1>} />
          <Route element={Error} />
          

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;